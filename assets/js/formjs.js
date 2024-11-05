// formjs.js

// Store the original code to reset for the Undo function
const originalCode = document.getElementById("codeArea").innerText;

// Function to run the form code
function runCode() {
    const htmlCode = `
        <form>
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama Anda">
        
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email Anda">
        
            <label for="message">Pesan:</label>
            <textarea id="message" name="message" rows="4" placeholder="Tulis pesan Anda di sini"></textarea>
        
            <button type="submit">Kirim</button>
        </form>
    `;

    const cssCode = `
        <style>
            form {
                display: flex;
                flex-direction: column;
                max-width: 400px;
                margin: auto;
                background-color: #f4f4f4;
                padding: 20px;
                border-radius: 8px;
            }
            label {
                margin-top: 10px;
                color: #333;
            }
            input, textarea {
                padding: 10px;
                margin-top: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            button {
                margin-top: 15px;
                padding: 10px;
                border-radius: 5px;
                background-color: #4CAF50;
                color: #fff;
                border: none;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #45a049;
            }
        </style>
    `;

    // Combine HTML and CSS code, then render in the iframe
    const outputFrame = document.getElementById("output");
    const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    doc.open();
    doc.write(cssCode + htmlCode);
    doc.close();
}

// Function to reset the code to its original state
function undoCode() {
    document.getElementById("codeArea").innerText = originalCode;
    const outputFrame = document.getElementById("output");
    outputFrame.src = 'about:blank'; // Clear the output
}
