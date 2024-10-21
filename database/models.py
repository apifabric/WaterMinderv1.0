# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 21, 2024 01:27:57
# Database: sqlite:////tmp/tmp.B8oMh2QQur/WaterMinderv1.0/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class CustomChallenge(SAFRSBaseX, Base):
    """
    description: Contains custom challenges designed to motivate users in water intake.
    """
    __tablename__ = 'custom_challenges'
    _s_collection_name = 'CustomChallenge'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    challenge_name = Column(String, nullable=False)
    description = Column(String)
    difficulty_level = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    UserChallengeList : Mapped[List["UserChallenge"]] = relationship(back_populates="challenge")



class Notification(SAFRSBaseX, Base):
    """
    description: Maintains a list of notifications that can be sent to users.
    """
    __tablename__ = 'notifications'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    message = Column(String, nullable=False)
    importance = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    UserNotificationList : Mapped[List["UserNotification"]] = relationship(back_populates="notification")



class User(SAFRSBaseX, Base):
    """
    description: Stores user information including personal details and preferences for water intake.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    age = Column(Integer)
    weight = Column(Float)
    activity_level = Column(String)
    climate = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    HydrationSettingList : Mapped[List["HydrationSetting"]] = relationship(back_populates="user")
    ProgressMilestoneList : Mapped[List["ProgressMilestone"]] = relationship(back_populates="user")
    ReminderList : Mapped[List["Reminder"]] = relationship(back_populates="user")
    UserAchievementList : Mapped[List["UserAchievement"]] = relationship(back_populates="user")
    UserChallengeList : Mapped[List["UserChallenge"]] = relationship(back_populates="user")
    UserNotificationList : Mapped[List["UserNotification"]] = relationship(back_populates="user")
    WaterConsumptionStatisticList : Mapped[List["WaterConsumptionStatistic"]] = relationship(back_populates="user")
    WaterConsumptionList : Mapped[List["WaterConsumption"]] = relationship(back_populates="user")
    WaterIntakeGoalList : Mapped[List["WaterIntakeGoal"]] = relationship(back_populates="user")



class HydrationSetting(SAFRSBaseX, Base):
    """
    description: Stores individual user settings that affect hydration recommendations.
    """
    __tablename__ = 'hydration_settings'
    _s_collection_name = 'HydrationSetting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    preferred_times = Column(String)
    water_type_preference = Column(String)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("HydrationSettingList"))

    # child relationships (access children)



class ProgressMilestone(SAFRSBaseX, Base):
    """
    description: Tracks user achievements in water consumption over time.
    """
    __tablename__ = 'progress_milestones'
    _s_collection_name = 'ProgressMilestone'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    milestone_name = Column(String, nullable=False)
    achieved_date = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ProgressMilestoneList"))

    # child relationships (access children)



class Reminder(SAFRSBaseX, Base):
    """
    description: Stores users' settings and preferences for hydration reminders.
    """
    __tablename__ = 'reminders'
    _s_collection_name = 'Reminder'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    reminder_frequency = Column(String, nullable=False)
    reminder_type = Column(String, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ReminderList"))

    # child relationships (access children)



class UserAchievement(SAFRSBaseX, Base):
    """
    description: Stores records of various achievements by the user in the app.
    """
    __tablename__ = 'user_achievements'
    _s_collection_name = 'UserAchievement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    achievement_name = Column(String, nullable=False)
    achieved_date = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserAchievementList"))

    # child relationships (access children)



class UserChallenge(SAFRSBaseX, Base):
    """
    description: Maps users to the challenges they have accepted or completed.
    """
    __tablename__ = 'user_challenges'
    _s_collection_name = 'UserChallenge'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    challenge_id = Column(ForeignKey('custom_challenges.id'))
    start_date = Column(DateTime)
    completion_date = Column(DateTime)

    # parent relationships (access parent)
    challenge : Mapped["CustomChallenge"] = relationship(back_populates=("UserChallengeList"))
    user : Mapped["User"] = relationship(back_populates=("UserChallengeList"))

    # child relationships (access children)



class UserNotification(SAFRSBaseX, Base):
    __tablename__ = 'user_notifications'
    _s_collection_name = 'UserNotification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    notification_id = Column(ForeignKey('notifications.id'))

    # parent relationships (access parent)
    notification : Mapped["Notification"] = relationship(back_populates=("UserNotificationList"))
    user : Mapped["User"] = relationship(back_populates=("UserNotificationList"))

    # child relationships (access children)



class WaterConsumptionStatistic(SAFRSBaseX, Base):
    """
    description: Holds analytical data regarding users' water consumption patterns over time.
    """
    __tablename__ = 'water_consumption_statistics'
    _s_collection_name = 'WaterConsumptionStatistic'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    average_daily_intake = Column(Float)
    peak_intake_time = Column(String)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("WaterConsumptionStatisticList"))

    # child relationships (access children)



class WaterConsumption(SAFRSBaseX, Base):
    """
    description: Records details of water consumption by users including timestamp and amount.
    """
    __tablename__ = 'water_consumptions'
    _s_collection_name = 'WaterConsumption'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    amount_consumed = Column(Float, nullable=False)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("WaterConsumptionList"))

    # child relationships (access children)



class WaterIntakeGoal(SAFRSBaseX, Base):
    """
    description: Holds user-defined daily water intake goals, personalized as per user preferences.
    """
    __tablename__ = 'water_intake_goals'
    _s_collection_name = 'WaterIntakeGoal'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    goal_amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("WaterIntakeGoalList"))

    # child relationships (access children)
