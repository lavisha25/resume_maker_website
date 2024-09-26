const nextbtn=()=>{
    const Fname = document.getElementById('Fname').value;
    const Mname = document.getElementById('Mname').value;
    const Lname = document.getElementById('Lname').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const mail = document.getElementById('mail').value;
    const phone = document.getElementById('phone').value;
    const fathername = document.getElementById('fathername').value;
    const mothername = document.getElementById('mothername').value;
    const country = document.getElementById('country').value;
    const zipcode = document.getElementById('zipcode').value;

    localStorage.setItem("Fname",Fname);
    localStorage.setItem("Mname",Mname);
    localStorage.setItem("Lname",Lname);
    localStorage.setItem("address",address);
    localStorage.setItem("city",city);
    localStorage.setItem("country",country);
    localStorage.setItem("zipcode",zipcode);
    localStorage.setItem("mail",mail);
    localStorage.setItem("phone",phone);
    localStorage.setItem("fathername",fathername);
    localStorage.setItem("mothername",mothername);
}
const nextbtnresume7=()=>{
    const employer = document.getElementById('employer').value;
    const jobtitle = document.getElementById('jobtitle').value;
    const expcity = document.getElementById('expcity').value;
    const expstate = document.getElementById('expstate').value;
    const startmonth = document.getElementById('startmonth').value;
    const startyear = document.getElementById('startyear').value;
    const endmonth = document.getElementById('endmonth').value;
    const endyear = document.getElementById('endyear').value;

    localStorage.setItem("employer",employer);
    localStorage.setItem("jobtitle",jobtitle);
    localStorage.setItem("expcity",expcity);
    localStorage.setItem("expstate",expstate);
    localStorage.setItem("startmonth",startmonth);
    localStorage.setItem("startyear",startyear);
    localStorage.setItem("endmonth",endmonth);
    localStorage.setItem("endyear",endyear);
}

const submitclick=()=>{
    const school = document.getElementById('school').value;
    const cityresume8 = document.getElementById('cityresume8').value;
    const stateresume8 = document.getElementById('stateresume8').value;
    const degree = document.getElementById('degree').value;
    const studyfield = document.getElementById('studyfield').value;
    const gradmonth = document.getElementById('gradmonth').value;
    const gradyear = document.getElementById('gradyear').value;

    localStorage.setItem("school",school);
    localStorage.setItem("cityresume8",cityresume8);
    localStorage.setItem("stateresume8",stateresume8);
    localStorage.setItem("degree",degree);
    localStorage.setItem("studyfield",studyfield);
    localStorage.setItem("gradmonth",gradmonth);
    localStorage.setItem("gradyear",gradyear);
}
const year=()=>{
    const gradmonth = document.getElementById('gradmonth').value;
    const gradyear = document.getElementById('gradyear').value;
    console.log(gradmonth)
    console.log(gradyear)
}