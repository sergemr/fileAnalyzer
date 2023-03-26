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
    file_image1 = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png"
    file_image = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/facturanucleo.png"
    image = cv2.imread(file_image)
    # print(file_path)

    print("file_path")
    print(file_image)
    print(path)
    print("image")
    # print(image)

    # image = image[..., ::-1]  # BGR to RGB
    model = lp.Detectron2LayoutModel('lp://PrimaLayout/mask_rcnn_R_50_FPN_3x/config',
                                     extra_config=[
                                         "MODEL.ROI_HEADS.SCORE_THRESH_TEST", 0.5],
                                     label_map={1: "TextRegion", 2: "ImageRegion", 3: "TableRegion", 4: "MathsRegion", 5: "SeparatorRegion", 6: "OtherRegion"})

    layout_result = model.detect(image)

    lp.draw_box(image, layout_result,  box_width=5,
                box_alpha=0.2, show_element_type=True)
    print("model")
    layout = model.detect(image)
    lp.draw_box(image, layout, box_width=3)
    print("type model")
    type(layout)
    lp.elements.Layout

    ocr_agent = lp.TesseractAgent(languages='eng')

    image_width = len(image[0])
    image = image[..., ::-1]

    h, w = image.shape[:2]

    text_blocks = lp.Layout(
        [b for b in layout_result if b.type == 'TextRegion'])
    figure_blocks = lp.Layout([b for b in layout_result if b.type == 'Figure'])
    # Sort element ID of the left column based on y1 coordinate
    text_blocks = lp.Layout([b for b in text_blocks
                             if not any(b.is_in(b_fig) for b_fig in figure_blocks)])
    left_interval = lp.Interval(0, w/2*1.05, axis='x').put_on_canvas(image)

    left_blocks = text_blocks.filter_by(left_interval, center=True)._blocks
    left_blocks.sort(key=lambda b: b.coordinates[1])

    # Sort element ID of the right column based on y1 coordinate
    right_blocks = [b for b in text_blocks if b not in left_blocks]
    right_blocks.sort(key=lambda b: b.coordinates[1])

    # Sort the overall element ID starts from left column
    text_blocks = lp.Layout([b.set(id=idx)
                            for idx, b in enumerate(left_blocks + right_blocks)])

    # lp.draw_box(file_image, text_blocks,  box_width=5, box_alpha=0.2,
    #            show_element_type=True, show_element_id=True)
    for block in text_blocks:

        # Crop image around the detected layout
        segment_image = (block
                         .pad(left=15, right=15, top=5, bottom=5)
                         .crop_image(image))

        # Perform OCR
        text = ocr_agent.detect(segment_image)

        # Save OCR result
        block.set(text=text, inplace=True)
    text_blocks = lp.Layout(
        [b for b in layout_result if b.type == 'TextRegion'])
    figure_blocks = lp.Layout([b for b in layout_result if b.type == 'Figure'])

    text_blocks = lp.Layout([b for b in text_blocks
                             if not any(b.is_in(b_fig) for b_fig in figure_blocks)])
    left_interval = lp.Interval(0, w/2*1.05, axis='x').put_on_canvas(image)

    left_blocks = text_blocks.filter_by(left_interval, center=True)
    left_blocks.sort(key=lambda b: b.coordinates[1], inplace=True)

    right_blocks = [b for b in text_blocks if b not in left_blocks]
    text_blocks = lp.Layout([b.set(id=idx)
                            for idx, b in enumerate(left_blocks + right_blocks)])

    ocr_agent = lp.TesseractAgent(languages='eng')
    # Initialize the tesseract ocr engine. You might need
    # to install the OCR components in layoutparser:
    # pip install layoutparser[ocr]
    # print(text_blocks)
    for block in text_blocks:
        segment_image = (block
                         .pad(left=5, right=5, top=5, bottom=5)
                         .crop_image(image))
    # add padding in each image segment can help
    # improve robustness

    text = ocr_agent.detect(file_image)
    block.set(text=text, inplace=True)
    for txt in text_blocks.get_texts():
        print(txt, end='\n---\n')
    return "model"


    # Show the detected layout of the input image
extract_text("path")
