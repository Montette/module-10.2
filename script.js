var span = $("span");
span.each(function(index,element) {
    if (index % 2 == 0){
        $(element).css("color","red");
    };
});

var par = $("p");
par.each(function(index,element){
    var button = "<button data-tmp='" + index + "'>Button</button>";
    $(element).append(button);
})

$("button").click(function(element){
    alert("Index: " + $(this).attr("data-tmp"))
})