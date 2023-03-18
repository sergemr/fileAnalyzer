import layoutparser as lp
import os
import cv2
import ssl

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context


def extract_text(path):
    file_path2 = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.pdf'
    file_image = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png"
    image = cv2.imread(file_image)
    # print(file_path)

    print("file_path")
    print(file_image)
    print(path)
    print("image")
    # print(image)

    # image = image[..., ::-1]  # BGR to RGB
    model = lp.Detectron2LayoutModel('lp://PubLayNet/faster_rcnn_R_50_FPN_3x/config',
                                     extra_config=[
                                         "MODEL.ROI_HEADS.SCORE_THRESH_TEST", 0.8],
                                     label_map={0: "Text", 1: "Title", 2: "List", 3: "Table", 4: "Figure"})+

    ocr_agent = lp.GCVAgent.from_pretrained(
        'lp://PrimaLayout/mask_rcnn_R_50_FPN_3x/config')

    print("model")
    layout = model.detect(image)
    lp.draw_box(image, layout, box_width=3)
    print("type model")
    type(layout)
    lp.elements.Layout
    return "model"
    # Show the detected layout of the input image
