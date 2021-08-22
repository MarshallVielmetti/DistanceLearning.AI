import cv2
import numpy as np
from keras.models import load_model

mpath = r'C:\Users\binkm\OneDrive\Documents\REPOSITORIES\AlertAIMonorepo\API\saved_face_analysis_model\saved_model.pb'
model = load_model(mpath)