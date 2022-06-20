var testRes = document.querySelector("p");
var url = "node-server-pdf.herokuapp.com";
fetch(url,
    {
        method: 'GET',
        headers: {
            "Content-Type": "text/html"
        }
    }
)
.then(res => {
    return res.text();
})
.then(data => {
    console.log(data);
    testRes.innerText = data;
})