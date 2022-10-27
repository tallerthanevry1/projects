console.log($)

$.ajax("barcode-lookup.p.rapidapi.com")
.then((data) => {
    console.log(data)
})