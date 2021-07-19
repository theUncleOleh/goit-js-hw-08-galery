const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  
  const galleryContainer = document.querySelector(".js-gallery")
  console.log(galleryContainer);

//  cоздали разметку и загрузили ее на страницу
const galeryItemList = galleryItems.map( item =>{
 const createItem = document.createElement('li');
createItem.classList.add("gallery__item");
  const createLink = document.createElement('a');
  createLink.classList.add("gallery__link");
  createLink.href = `${item.preview}` ;
  const createImg = document.createElement('img');
  createImg.classList.add("gallery__image");
  createImg.src = `${item.preview}` ;
 createImg.dataset.source = `${item.original}`
  createImg.alt = `${item.description}`;
  // console.log(createImg);

  createLink.appendChild(createImg);
  createItem.appendChild(createLink);
  // console.log(createItem);
return createItem;
  });
 
  galleryContainer.append(...galeryItemList);
// добрались через querySelector до елементов разметки
  const lightBox = document.querySelector(".js-lightbox");
  const lightBoxOverlay = document.querySelector(".lightbox__overlay");
  const lightBoxContent = document.querySelector(".lightbox__content");
  const lightBoxImg = document.querySelector(".lightbox__image");
  const lightBoxBtn = document.querySelector(".lightbox__button");

 
// вешаем обозревателя на клик
  galleryContainer.addEventListener('click', onOpenModal)
    

  //  открытие модального окна
   function onOpenModal (event){
     event.preventDefault();
     window.addEventListener('keydown',onEscKeyDown );
     const galeryImage = event.target;
     if(galeryImage.nodeName !== 'IMG'){
       return;
     };
     lightBox.classList.add('is-open');

   
     lightBoxImg.src = galeryImage.dataset.source;
     lightBoxImg.alt = galeryImage.alt;
     console.log(lightBoxImg.src);
    //  const carentActiveImg = document.querySelector("")

   };

   lightBoxBtn.addEventListener('click',onCloseModal,);

  function onCloseModal(event){
    window.removeEventListener('keydown',onEscKeyDown );
    lightBox.classList.remove('is-open');
    //  lightBoxImg.src = "";
     console.log(lightBoxImg);
  };

   function onEscKeyDown (evt){
     console.log(evt);
     
     if(evt.code === 'Escape') {
      // lightBox.classList.remove('is-open');
      onCloseModal();
     }
   };