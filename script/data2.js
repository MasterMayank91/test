/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "F.Society"
*   Script : Script/data
*/ 

try
{
    var staff_data = [
        ["e5.jpg","Principal","STF4209211","Kalid","Rahmani",'M',25-01-1995,9211420420,"#420 Sector-24","Bachlor",60000],
        ["e6.jpg","Wish Principal","STF4209212","Sveeta","Sharma",'F',24-02-1990,9211420420,"#420 Sector-24","Bachlor",50000],
        ["e7.jpg","Librarion","STF4209213","Mohd","Anash",'M',24-02-1993,9211420420,"#420 Sector-24","Married",40000],
        ["e8.jpg","Property Incharge","STF4209214","Priya","Gill",'F',24-02-1990,9211420420,"#420 Sector-24","Bachlor",40000],
        ["e10.jpg","Hindi Teacher","STF4209215","Lipee","sharma",'F',24-02-1990,9211420420,"#420 Sector-24","Bachlor",40000],
        ["e11.jpg","English Teacher","STF4209216","Giya","Fernerdanz",'F',24-02-1990,9211420420,"#420 Sector-24","Bachlor",40000]
    ];

    var n = 0;

    let staff = document.querySelector("#staff");

    let image = document.querySelector("img[name='stf_img']");

    dispaly();

    document.querySelector("div[name='afr_btn']").onclick = () => { (n == 0)? n = staff_data.length : n--; dispaly();}
    
    document.querySelector("div[name='bfr_btn']").onclick = () => { (n == staff_data.length)? n = 0 : n++; dispaly();} 

    function dispaly()
    {
        staff.innerHTML =
            "<h2>"+staff_data[n][1]+"</h2>"+
            "<data> STAFF ID : "+staff_data[n][2]+"</data>"+
            "<data> Name : "+staff_data[n][3]+" "+staff_data[n][4]+"</data>"+
            "<data> Gender : "+staff_data[n][5]+"</data>"+
            "<data> Date Of Birth : "+staff_data[n][6]+"</data>"+
            "<data> Contact : "+staff_data[n][7]+"</data>"+
            "<data> Address : "+staff_data[n][8]+"</data>"+
            "<data> Married : "+staff_data[n][9]+"</data>"+
            "<data> Salary : "+staff_data[n][10]+"</data>";
        
        image.src = "../rtx/"+staff_data[n][0];
    }
    
}
catch(error){}