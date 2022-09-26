let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
   
    const data={
        name: document.getElementById("name").value,
        
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`

      <div class="NameContainer">${data.name}</div>
      <a href="mailto:asifatasneem2001@gmail.com">${data.email}</a><br>
      <a href="www.astas.com">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    output.appendChild(newlist);
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})
