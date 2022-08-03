/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "F.Society"
*   Script : Script/data
*/ 

try
{
    var subject_data = [
        ["English Communication", "&#128213;"],
        [" German Language", "&#128215;"],
        [" French Speek", "&#128216;"],
        [" Russian Talk", "&#128217;"],
        [" Hindi", "&#128218;"],
        [" Science Magic", "&#129514;"],    
        [" Computer Fundamental", "&#128187;"],
        [" Mathmatical Logic", "&#128208;"],
        [" Food with Taste", "&#127860;"],
        [" Reproduction", "&#128068;"],
        [" Gernal Knowlegde", "&#128506;"]
    ];

    for (let i = 0; i < subject_data.length; i++)
    {
        document.write("<div class='subject'>");
    
        document.write("<h3>"+subject_data[i][0]+"</h3> <div class='btn4 img4'>"+subject_data[i][1]+"</div>");
        
        document.write("<hr> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptatem cum mollitia nesciunt deleniti consequuntur aliquid, soluta dolorem dolore? </p>");
    
        document.write("<a href='#' download='pdf' class='link3'> Download </a> <br>");
    
        document.write("<div class='star'>");

        document.write("<div class='btn4'> &starf; </div>");
        document.write("<div class='btn4'> &starf; </div>");
        document.write("<div class='btn4'> &star; </div>");
        document.write("<div class='btn4'> &star; </div>");
        document.write("<div class='btn4'> &star; </div>");
            
        document.write("</div></div>");   
    }
}
catch(error)
{
    alert(error);
}