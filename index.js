function fetchPhotos(){
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML ='';

    for (let i=0; i<4; i++){
        const photo = document.createElement('img');
        photo.src = `https://picsum.photos/200/300?random=${Math.random() * 1000}`;
        photo.alt = 'Random Photo';
        photo.classList.add('photo');
        photoContainer.appendChild(photo);
    }
}

function toggleGreyscale(){
    const greyscaleToggle = document.getElementById('greyscaleToggle');
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        if(greyscaleToggle.checked){
            photo.style.filter = 'grayscale(100%)';
        }else{
            photo.style.filter = 'none';
        }
    });
}

function fetchPhotos(){
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML ='';

    for (let i=0; i<4; i++){
        const skeleton = document.createElement('div');
        skeleton.classList.add('skeleton');
        photoContainer.appendChild(skeleton);
    }
    
    const promises = [];

    for(let i = 0; i<4;i++){
        const promise = new Promise((resolve) => {
            fetch('https://piscum.photos',{method: 'GET'})
            .then(response => {
                if(!response.ok){
                    throw new Error (`Network response was not ok: ${response.statusText}`);
                }
                return response.url;           
            })
            .then(photoUrl => {
                const photo = document.createElement('img');
                photo.onload = () => resolve ();
                photo,src = photoUrl;
                photo.alt ='Random Photo';
                photo.classList.add('photo');
            photoContainer.appendChild(photo);
            })
        .catch(error => {
            console.error('Error fetching photo:',error);
        });
    });
    promisess.push(promise);

  }
  Promise.all(promise).then(()=> {
    const skeletons = document.querySelectorAll('.skeleton');
    skeletons.forEach(skeleton => skeleton.remove());
  });
}              




