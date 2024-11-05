// Simpan kode asli untuk fungsi Undo
const originalCode = document.getElementById("codeArea").innerText;

// Fungsi untuk menjalankan kode
function runCode() {
    const htmlCode = `
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sanji</td>
                    <td>Vinsmoke</td>
                    <td>21</td>
                    <td>East Blue</td>
                </tr>
                <tr>
                    <td>Kane</td>
                    <td>Harry</td>
                    <td>30</td>
                    <td>North Blue</td>
                </tr>
                <tr>
                    <td>Ronaldo</td>
                    <td>Dos Santos</td>
                    <td>35</td>
                    <td>West Blue</td>
                </tr>
            </tbody>
        </table>
    `;

    const cssCode = `
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 16px;
            }
            th, td {
                padding: 10px;
                border: 1px solid #ddd;
                text-align: left;
            }
            thead {
                background-color: #f4f4f4;
            }
            tbody tr:nth-of-type(even) {
                background-color: #f9f9f9;
            }
            tbody tr:hover {
                background-color: #f1f1f1;
            }
        </style>
    `;

    // Gabungkan kode HTML dan CSS lalu tampilkan di iframe
    const outputFrame = document.getElementById("output");
    const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    doc.open();
    doc.write(cssCode + htmlCode);
    doc.close();
}

// Fungsi untuk mengembalikan kode ke keadaan semula
function undoCode() {
    document.getElementById("codeArea").innerText = originalCode;
    const outputFrame = document.getElementById("output");
    outputFrame.src = 'about:blank'; // Kosongkan output
}

document.addEventListener("DOMContentLoaded", () => {
    // Memilih semua elemen yang akan diberikan efek slide
    const elements = document.querySelectorAll('.tutorial-content, .code-card, .header, .responsive-table');

    elements.forEach((el, index) => {
        // Menambahkan kelas slide-in dengan jeda waktu agar animasi berurutan
        setTimeout(() => {
            el.classList.add('slide-in');
        }, index * 200); // Mengatur jeda 200ms antara setiap elemen
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".tutorial-content, .code-section, .section");

    function revealOnScroll() {
        elements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.style.opacity = "1";
            }
        });
    }

    // Menambahkan listener untuk scroll dan memeriksa elemen pada load pertama
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
