import cv2
import mediapipe as mp
import math, time


cap = cv2.VideoCapture(0)
pTime = 0

mpDraw = mp.solutions.drawing_utils
mpFaceMesh = mp.solutions.face_mesh
faceMesh = mpFaceMesh.FaceMesh(max_num_faces=1)
drawSpec = mpDraw.DrawingSpec(thickness=1, circle_radius=1)

while True:
  success, img = cap.read()
  imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  results = faceMesh.process(imgRGB)
  if results.multi_face_landmarks:
    for faceLms in results.multi_face_landmarks:
      mpDraw.draw_landmarks(image=img,
                            landmark_list=faceLms,
                            connections=mpFaceMesh.FACE_CONNECTIONS,
                            landmark_drawing_spec=drawSpec,
                            connection_drawing_spec=drawSpec)
  cTime = time.time()
  fps = 1 / (cTime - pTime)
  pTime = cTime
  cv2.putText(img, f'FPS: {int(fps)}', (20, 70), cv2.FONT_HERSHEY_PLAIN, 3, (0, 255, 0), 3)
  cv2.imshow("Facial Landmark Mesh: Camera Feed", img)
  cv2.waitKey(1)