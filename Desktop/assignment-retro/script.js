const loadData = async() =>{
    const Response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
     const data = await Response.json();
     const allData = data;

     const main = document.getElementById('main-container-cardo');
 
     allData.posts.forEach((items) => {
      const div = document.createElement('div');
     div.classList = `lg:p-10 p-2 lg:flex flex-row lg:justify-between`;
      div.innerHTML = `
      <div class=" lg:w-[750px] w-full flex flex-col  lg:gap-6 bg-[#ebecf0] lg:p-10 p-2 rounded-lg  ">
    
      <div class="w-[100px] h-[100px] bg-gray-200">
        <img src="${items.image}" alt="">
      </div>
    
      <div class="space-y-2">
        <div class="flex gap-6">
          <p>${items.category}</p>
          <p>Author : ${items.author?.name}</p>
        </div>
        <h3 class="text-[#12132D] font-semibold text-xl">${items.title}</h3>
        <p>${items.description}</p>
        <div>
          <div class=" flex justify-between">
            <div class="flex justify-center items-center gap-8">
         <div class="">
         <img src="images/Vector (3).png" alt="">
          <p>${items.comment_count}</p>
         </div>
    
         <div>
          <img src="images/tabler-icon-eye.png" alt="">
          <p>${items.view_count}</p>
         </div>
         <div>
          <img src="images/tabler-icon-clock-hour-9.png" alt="">
          <p>${items.posted_time} min</p>
         </div>
            </div>
    
            <div class="">
         
               <img  onclick="modalData()" src="images/email 1.png" alt="">
             
            </div>
    
          </div>
        </div>
      </div>
    
    </div>
    
`
      
           main.appendChild(div);
     
      
     });
}

const modalData = () =>{
    const sitedata = document.getElementById('site-button');
 
    sitedata.classList.add('hidden');
        console.log('clicked');

   
}

loadData();
modalData();


