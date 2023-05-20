from sklearn.neighbors import KNeighborsClassifier
import joblib

import os
import cv2
import numpy as np
import logging
logging.basicConfig(filename="log.txt", level=logging.DEBUG)

# Define the image size and the path to the training data folders
IMAGE_SIZE = 50
TRAINING_DATA_PATH = "/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/train_images/"

# Define the labels for noinvoices and invoices
NOINVOICES_LABEL = "noinvoices"
INVOICES_LABEL = "invoices"

# Function to preprocess the training images


def preprocess_image(image_path):
   # print("image_path")

  #  print(image_path)
    print("Loading images from", image_path)
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    logging.debug((f'Loaded Img path: {image_path}'))
    img = cv2.resize(img, (IMAGE_SIZE, IMAGE_SIZE))
    return img.reshape(-1)


print("Loading images from")

# Load the training data
training_data = []
for folder in os.listdir(TRAINING_DATA_PATH):
    label = NOINVOICES_LABEL if folder == "noinvoices" else INVOICES_LABEL
    folder_path = os.path.join(TRAINING_DATA_PATH, folder)
    print("Loading images from", folder_path)
    if '.DS_Store' not in folder_path:
        for image_file in os.listdir(folder_path):
            image_path = os.path.join(folder_path, image_file)
            if '.DS_Store' not in image_path:
                img = preprocess_image(image_path)
                training_data.append([img, label])

# Shuffle the training data
np.random.shuffle(training_data)

# Split the training data into inputs and labels
X = np.array([data[0] for data in training_data])
y = np.array([data[1] for data in training_data])

# Define the classifier and train it on the training data
classifier = KNeighborsClassifier(n_neighbors=5)
print("Loading images from", classifier)
classifier.fit(X, y)
# Save the trained model
joblib.dump(classifier, 'model.pkl')
print("fitng images from", classifier)
# Function to preprocess the test images


def preprocess_test_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (IMAGE_SIZE, IMAGE_SIZE))
    return img.reshape(-1)


# Use the classifier to predict whether a test image is a noinvoices or a invoices
image_path = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/factura.png"

test_image = preprocess_test_image(image_path)
prediction = classifier.predict([test_image])[0]

# Print the prediction result
if prediction == NOINVOICES_LABEL:
    print("The test image is a noinvoices.")
else:
    print("The test image is a invoices.")


# Use the classifier to predict whether a test image is a noinvoices or a invoices

test_image_path2 = "/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/train_images/noinvoices/P090903054.jpg"
test_image2 = preprocess_test_image(test_image_path2)
prediction2 = classifier.predict([test_image2])[0]

print(prediction2)
# Print the prediction result
if prediction2 == NOINVOICES_LABEL:
    print("The test image is a noinvoices.")
else:
    print("The test image is a invoices.")

classifier = joblib.load('model.pkl')

# Use the loaded classifier to predict the class of a test image
test_image_path = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/nofactura.png"
test_image = preprocess_test_image(test_image_path)
print(test_image)
prediction3 = classifier.predict([test_image])[0]

print(prediction3)
# Print the prediction result
if prediction3 == NOINVOICES_LABEL:
    print("The test image is a noinvoices nofactura from Model.")
else:
    print("The test image is a invoices nofacturafrom Model.")
