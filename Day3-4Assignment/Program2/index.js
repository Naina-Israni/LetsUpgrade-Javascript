function copyText()
{
    let eles=document.getElementsByTagName("input");
    let text=eles[0].value;
    eles[1].value=text;
}