# from GenFunctions.model import train_model
from GenFunctions.model2 import train_model2
# from GenFunctions.ImagesClass import read_image_pdf, read_image, load_images, label_img, convert_process_pdf_to_image
# from GenFunctions.ImagesClassClean import read_image
# from GenFunctions.pdfClass import extract_text, extractPdfText
import sys
# from GenFunctions.modelClassifier import *
# print(sys.path)
sys.path.insert(0, '../GenFunctions')
# sys.path.insert(0, '../AWSFunctions')
# from layoutParserClass import extract_text


file_path = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/factura.pdf'
file_path_nucleo = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/facturanucleo.pdf'
file_path_no = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/Actividad3.pdf'
file_image = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/factura.png"
file_folder = "/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/train_images/"


# extract_text(file_path)
# extract_text(file_path)


# load_images(file_folder)

# read_image(file_image)


def extracttext(file_path2):
    # read_image(file_path2)
    # extract_text(file_path_nucleo)
    # extractPdfText(file_path_nucleo)
    print(file_path2)
    print("sys.path")
    print(sys.path)
    return file_path2


# extracttext(file_path_nucleo)
# train_model2()
# convert_process_pdf_to_image(file_path)
# convert_process_pdf_to_image(file_path_nucleo)
# read_image(file_image)
#
