# from model import train_model
# from imagesClass import read_image_pdf, read_image, load_images, label_img, convert_process_pdf_to_image
# from pdfClass import extract_text
# from modelClassifier import *
from layoutParserClass import extract_text

file_path = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.pdf'
file_path_nucleo = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/facturanucleo.pdf'
file_path_no = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/Actividad3.pdf'
file_image = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png"
file_folder = "/Users/sergio/Documents/School/fileAnalyzer/backend/Gen Functions/train_images/invoices"


# extract_text(file_path)
# extract_text(file_path)


# load_images(file_folder)

# read_image(file_image)

extract_text(file_path)
# train_model()
# convert_process_pdf_to_image(file_path)
# convert_process_pdf_to_image(file_path_nucleo)
# read_image(file_image)
#
