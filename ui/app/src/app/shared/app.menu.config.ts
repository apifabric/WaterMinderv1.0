import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomChallengeCardComponent } from './CustomChallenge-card/CustomChallenge-card.component';

import { HydrationSettingCardComponent } from './HydrationSetting-card/HydrationSetting-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { ProgressMilestoneCardComponent } from './ProgressMilestone-card/ProgressMilestone-card.component';

import { ReminderCardComponent } from './Reminder-card/Reminder-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserAchievementCardComponent } from './UserAchievement-card/UserAchievement-card.component';

import { UserChallengeCardComponent } from './UserChallenge-card/UserChallenge-card.component';

import { UserNotificationCardComponent } from './UserNotification-card/UserNotification-card.component';

import { WaterConsumptionCardComponent } from './WaterConsumption-card/WaterConsumption-card.component';

import { WaterConsumptionStatisticCardComponent } from './WaterConsumptionStatistic-card/WaterConsumptionStatistic-card.component';

import { WaterIntakeGoalCardComponent } from './WaterIntakeGoal-card/WaterIntakeGoal-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'CustomChallenge', name: 'CUSTOMCHALLENGE', icon: 'view_list', route: '/main/CustomChallenge' }
    
        ,{ id: 'HydrationSetting', name: 'HYDRATIONSETTING', icon: 'view_list', route: '/main/HydrationSetting' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'ProgressMilestone', name: 'PROGRESSMILESTONE', icon: 'view_list', route: '/main/ProgressMilestone' }
    
        ,{ id: 'Reminder', name: 'REMINDER', icon: 'view_list', route: '/main/Reminder' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserAchievement', name: 'USERACHIEVEMENT', icon: 'view_list', route: '/main/UserAchievement' }
    
        ,{ id: 'UserChallenge', name: 'USERCHALLENGE', icon: 'view_list', route: '/main/UserChallenge' }
    
        ,{ id: 'UserNotification', name: 'USERNOTIFICATION', icon: 'view_list', route: '/main/UserNotification' }
    
        ,{ id: 'WaterConsumption', name: 'WATERCONSUMPTION', icon: 'view_list', route: '/main/WaterConsumption' }
    
        ,{ id: 'WaterConsumptionStatistic', name: 'WATERCONSUMPTIONSTATISTIC', icon: 'view_list', route: '/main/WaterConsumptionStatistic' }
    
        ,{ id: 'WaterIntakeGoal', name: 'WATERINTAKEGOAL', icon: 'view_list', route: '/main/WaterIntakeGoal' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomChallengeCardComponent

    ,HydrationSettingCardComponent

    ,NotificationCardComponent

    ,ProgressMilestoneCardComponent

    ,ReminderCardComponent

    ,UserCardComponent

    ,UserAchievementCardComponent

    ,UserChallengeCardComponent

    ,UserNotificationCardComponent

    ,WaterConsumptionCardComponent

    ,WaterConsumptionStatisticCardComponent

    ,WaterIntakeGoalCardComponent

];