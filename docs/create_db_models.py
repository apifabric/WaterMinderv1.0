# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, Float, ForeignKey, Boolean, Table
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
import datetime

Base = declarative_base()

# Association table for Many-to-Many relationship between Users and Notifications
user_notifications = Table(
    'user_notifications', Base.metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('user_id', Integer, ForeignKey('users.id')),
    Column('notification_id', Integer, ForeignKey('notifications.id'))
)

class Users(Base):
    """description: Stores user information including personal details and preferences for water intake."""
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True, nullable=False)
    age = Column(Integer, nullable=True)
    weight = Column(Float, nullable=True)
    activity_level = Column(String, nullable=True)
    climate = Column(String, nullable=True)

class WaterIntakeGoals(Base):
    """description: Holds user-defined daily water intake goals, personalized as per user preferences."""
    __tablename__ = 'water_intake_goals'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    goal_amount = Column(Float, nullable=False)
    user = relationship("Users", back_populates="intake_goals")

Users.intake_goals = relationship("WaterIntakeGoals", order_by=WaterIntakeGoals.id, back_populates="user")

class WaterConsumptions(Base):
    """description: Records details of water consumption by users including timestamp and amount."""
    __tablename__ = 'water_consumptions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    amount_consumed = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    user = relationship("Users", back_populates="consumptions")

Users.consumptions = relationship("WaterConsumptions", order_by=WaterConsumptions.id, back_populates="user")

class ProgressMilestones(Base):
    """description: Tracks user achievements in water consumption over time."""
    __tablename__ = 'progress_milestones'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    milestone_name = Column(String, nullable=False)
    achieved_date = Column(DateTime, default=datetime.datetime.utcnow)
    user = relationship("Users", back_populates="milestones")

Users.milestones = relationship("ProgressMilestones", order_by=ProgressMilestones.id, back_populates="user")

class Reminders(Base):
    """description: Stores users' settings and preferences for hydration reminders."""
    __tablename__ = 'reminders'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    reminder_frequency = Column(String, nullable=False)
    reminder_type = Column(String, nullable=False)
    user = relationship("Users", back_populates="reminders")

Users.reminders = relationship("Reminders", order_by=Reminders.id, back_populates="user")

class Notifications(Base):
    """description: Maintains a list of notifications that can be sent to users."""
    __tablename__ = 'notifications'
    id = Column(Integer, primary_key=True, autoincrement=True)
    message = Column(String, nullable=False)
    importance = Column(String, nullable=True)

class CustomChallenges(Base):
    """description: Contains custom challenges designed to motivate users in water intake."""
    __tablename__ = 'custom_challenges'
    id = Column(Integer, primary_key=True, autoincrement=True)
    challenge_name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    difficulty_level = Column(String, nullable=True)

class UserChallenges(Base):
    """description: Maps users to the challenges they have accepted or completed."""
    __tablename__ = 'user_challenges'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    challenge_id = Column(Integer, ForeignKey('custom_challenges.id'))
    start_date = Column(DateTime, default=datetime.datetime.utcnow)
    completion_date = Column(DateTime, nullable=True)
    user = relationship("Users", backref="user_challenges")
    challenge = relationship("CustomChallenges", backref="user_challenges")

class HydrationSettings(Base):
    """description: Stores individual user settings that affect hydration recommendations."""
    __tablename__ = 'hydration_settings'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    preferred_times = Column(String, nullable=True)
    water_type_preference = Column(String, nullable=True)
    user = relationship("Users", back_populates="settings")

Users.settings = relationship("HydrationSettings", order_by=HydrationSettings.id, back_populates="user")

class WaterConsumptionStatistics(Base):
    """description: Holds analytical data regarding users' water consumption patterns over time."""
    __tablename__ = 'water_consumption_statistics'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    average_daily_intake = Column(Float, nullable=True)
    peak_intake_time = Column(String, nullable=True)
    user = relationship("Users", back_populates="statistics")

Users.statistics = relationship("WaterConsumptionStatistics", order_by=WaterConsumptionStatistics.id, back_populates="user")

class UserAchievements(Base):
    """description: Stores records of various achievements by the user in the app."""
    __tablename__ = 'user_achievements'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    achievement_name = Column(String, nullable=False)
    achieved_date = Column(DateTime, default=datetime.datetime.utcnow)
    user = relationship("Users", back_populates="achievements")

Users.achievements = relationship("UserAchievements", order_by=UserAchievements.id, back_populates="user")

# Establish database connection
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Establish session
Session = sessionmaker(bind=engine)
session = Session()

# Adding sample data
user1 = Users(username='john_doe', age=30, weight=70, activity_level='moderate', climate='temperate')
goal1 = WaterIntakeGoals(user=user1, goal_amount=2.5)
consumption1 = WaterConsumptions(user=user1, amount_consumed=0.3, timestamp=datetime.datetime.now())
milestone1 = ProgressMilestones(user=user1, milestone_name='First Completion')
reminder1 = Reminders(user=user1, reminder_frequency='hourly', reminder_type='gentle nudge')
notification1 = Notifications(message='Time to drink water!', importance='high')
challenge1 = CustomChallenges(challenge_name='Daily 2 Liters', description='Drink at least 2L of water.', difficulty_level='medium')
user_challenge1 = UserChallenges(user=user1, challenge=challenge1, start_date=datetime.datetime.now())
setting1 = HydrationSettings(user=user1, preferred_times='10am, 2pm, 6pm', water_type_preference='sparkling')
statistic1 = WaterConsumptionStatistics(user=user1, average_daily_intake=2.3, peak_intake_time='afternoon')
achievement1 = UserAchievements(user=user1, achievement_name='Streak 7 days', achieved_date=datetime.datetime.now())

session.add_all([user1, goal1, consumption1, milestone1, reminder1, notification1, challenge1, user_challenge1, setting1, statistic1, achievement1])

# Adding additional users and records to reach at least 48 entries
user2 = Users(username='jane_doe', age=25, weight=60, activity_level='high', climate='dry')
goal2 = WaterIntakeGoals(user=user2, goal_amount=3.0)
consumption2 = WaterConsumptions(user=user2, amount_consumed=0.5, timestamp=datetime.datetime.now())
milestone2 = ProgressMilestones(user=user2, milestone_name='10 Days Streak')
reminder2 = Reminders(user=user2, reminder_frequency='every 2 hours', reminder_type='fun challenge')
notification2 = Notifications(message='Have you had your glass of water?', importance='medium')
challenge2 = CustomChallenges(challenge_name='Morning Hydration', description='Drink a glass of water first thing in the morning.', difficulty_level='easy')
user_challenge2 = UserChallenges(user=user2, challenge=challenge2, start_date=datetime.datetime.now())
setting2 = HydrationSettings(user=user2, preferred_times='9am, 1pm, 5pm', water_type_preference='still')
statistic2 = WaterConsumptionStatistics(user=user2, average_daily_intake=2.8, peak_intake_time='morning')
achievement2 = UserAchievements(user=user2, achievement_name='Hydration Master', achieved_date=datetime.datetime.now())

session.add_all([user2, goal2, consumption2, milestone2, reminder2, notification2, challenge2, user_challenge2, setting2, statistic2, achievement2])

# Complete with other dummy data for required instances
# Omitted detailed implementation for brevity, providing basic structure:
for _ in range(36):
    user = Users(username=f'user_{_}', age=20 + _, weight=65 + _, activity_level='low', climate='humid')
    session.add(user)
    session.add(WaterIntakeGoals(user=user, goal_amount=2.0 + (_ % 4)))
    session.add(WaterConsumptions(user=user, amount_consumed=0.2 * (_ % 5), timestamp=datetime.datetime.now()))
    session.add(ProgressMilestones(user=user, milestone_name=f'Milestone {_}'))
    session.add(Reminders(user=user, reminder_frequency='daily', reminder_type='nudge'))
    session.add(Notifications(message=f'Notification {_}', importance='low'))
    session.add(CustomChallenges(challenge_name=f'Challenge {_}', description='Description', difficulty_level='easy'))
    session.add(UserChallenges(user=user, challenge=challenge1, start_date=datetime.datetime.now()))
    session.add(HydrationSettings(user=user, preferred_times='morning', water_type_preference='still'))
    session.add(WaterConsumptionStatistics(user=user, average_daily_intake=2.0, peak_intake_time='evening'))
    session.add(UserAchievements(user=user, achievement_name=f'Achievement {_}', achieved_date=datetime.datetime.now()))

# Commit to store data in the database
session.commit()
session.close()
