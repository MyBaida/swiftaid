import fitz

pdf_path = r"C:/Users/Suku Tech Ltd/Desktop/swiftaid/Ubaida_swift-aid_thesis.pdf"
doc = fitz.open(pdf_path)
print("pages:", len(doc))
print("page 1 metadata:", doc.metadata)

for page_number in range(len(doc)):
    page = doc[page_number]
    text = page.get_text("text", flags=fitz.TEXTFLAGS_TEXT)
    if "citizen" in text.lower() or "responder" in text.lower() or "administrator" in text.lower():
        print(f"possible role page: {page_number + 1}")
