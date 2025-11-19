import cv2
import matplotlib.pyplot as plt

# Load image
image = cv2.imread('image.jpg')
image = cv2.resize(image, (720, 640))

# Models
faceProto = "opencv_face_detector.pbtxt"
faceModel = "opencv_face_detector_uint8.pb"
ageProto = "age_deploy.prototxt"
ageModel = "age_net.caffemodel"
genderProto = "gender_deploy.prototxt"
genderModel = "gender_net.caffemodel"

MODEL_MEAN_VALUES = (78.4263377603, 87.7689143744, 114.895847746)

# Load networks
faceNet = cv2.dnn.readNet(faceModel, faceProto)
ageNet = cv2.dnn.readNet(ageProto, ageModel)
genderNet = cv2.dnn.readNet(genderProto, genderModel)

# Labels
ageList = ['(0-2)', '(4-6)', '(8-12)', '(15-20)', '(25-32)', '(38-43)', '(48-53)', '(60-100)']
genderList = ['Male', 'Female']

# Detect face
frame = image.copy()
h, w = frame.shape[:2]
blob = cv2.dnn.blobFromImage(frame, 1.0, (300, 300), [104, 117, 123], True, False)

faceNet.setInput(blob)
detections = faceNet.forward()

faceBoxes = []
for i in range(detections.shape[2]):
    confidence = detections[0, 0, i, 2]
    if confidence > 0.7:
        x1 = int(detections[0, 0, i, 3] * w)
        y1 = int(detections[0, 0, i, 4] * h)
        x2 = int(detections[0, 0, i, 5] * w)
        y2 = int(detections[0, 0, i, 6] * h)

        faceBoxes.append([x1, y1, x2, y2])
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

if not faceBoxes:
    print("No face detected")

# Prediction
for box in faceBoxes:
    faceImg = frame[max(0, box[1]-15): min(box[3]+15, h-1),
                    max(0, box[0]-15): min(box[2]+15, w-1)]

    blob = cv2.dnn.blobFromImage(faceImg, 1.0, (227, 227), MODEL_MEAN_VALUES, swapRB=False)

    genderNet.setInput(blob)
    gender = genderList[genderNet.forward()[0].argmax()]

    ageNet.setInput(blob)
    age = ageList[ageNet.forward()[0].argmax()]

    cv2.putText(frame, f"{gender}, {age}", (box[0], box[1]-10),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

plt.figure(figsize=(7,7))
plt.imshow(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
plt.axis("off")
