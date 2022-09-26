/* Desenvolva a lógica da página aqui */
function showMorePost() {
    const bgBlack = document.createElement('section')
    const postPep = document.createElement('section')
    const divPep = document.createElement('div')
    const imgPep = document.createElement('img')
    const divTitle = document.createElement('div')
    const h2Title = document.createElement('h2')
    const pTitle = document.createElement('p')
    const closeModal = document.createElement('div')
    const buttonClonse = document.createElement('button')
    const divPost = document.createElement('div')
    const h2Post = document.createElement('h2')
    const pPost = document.createElement('p')

    //listClass

    bgBlack.classList = 'bg-post'
    bgBlack.id = 'container-post'

    postPep.classList = 'bg-main-post padding-post'

    divPep.classList = 'perfil margin-top flex itens-center just-betw'

    imgPep.src = '../../assets/img/user1.svg'

    divTitle.classList = 'flex gap flex-colum itens-star just-start'

    h2Title.classList = 'color-name title-sugest'
    h2Title.innerText = 'Samuel Leão'

    pTitle.classList = 'color-ocup func-sugest'
    pTitle.innerText = 'Front end Enguineer'

    buttonClonse.classList = 'close-modal'
    buttonClonse.innerText = 'X'
    buttonClonse.id = 'button-modalClose'

    divPost.classList = 'flex wrap gap margin-top flex-colum relative'

    h2Post.innerText = 'Empresa de Tecnologia da Informação abre vagas para programa de estágio'

    pPost.classList = 'color-grey-2'
    pPost.innerText = 'A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.'

    divPep.append(imgPep, buttonClonse)
    divTitle.append(h2Title, pTitle, closeModal)
    divPost.append(h2Post, pPost)
    postPep.append(divPep, divTitle, divPost)
    bgBlack.appendChild(postPep)

    return bgBlack
}


function showModal(){
    const modalButton = document.getElementById('buttonMorePost')
    const mainContaine = document.getElementById('main-container')

    modalButton.addEventListener('click', (event) => {
        event.preventDefault()
        console.log('clicou')
        const telaModal = showMorePost()
        mainContaine.appendChild(telaModal)
        closeModal()
    })

}
function closeModal(){
    const modalClose = document.getElementById('button-modalClose')
    const campModal = document.getElementById('container-post')
    modalClose.addEventListener('click', () =>{
        campModal.remove()
    })
}
showModal()