from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.CustomChallenge, method_decorators= method_decorators)
    api.expose_object(database.models.HydrationSetting, method_decorators= method_decorators)
    api.expose_object(database.models.User, method_decorators= method_decorators)
    api.expose_object(database.models.Notification, method_decorators= method_decorators)
    api.expose_object(database.models.ProgressMilestone, method_decorators= method_decorators)
    api.expose_object(database.models.Reminder, method_decorators= method_decorators)
    api.expose_object(database.models.UserAchievement, method_decorators= method_decorators)
    api.expose_object(database.models.UserChallenge, method_decorators= method_decorators)
    api.expose_object(database.models.UserNotification, method_decorators= method_decorators)
    api.expose_object(database.models.WaterConsumption, method_decorators= method_decorators)
    api.expose_object(database.models.WaterConsumptionStatistic, method_decorators= method_decorators)
    api.expose_object(database.models.WaterIntakeGoal, method_decorators= method_decorators)
    return api
