const maruza = document.querySelector('.maruza')
const amalyot = document.querySelector('.amalyot')
const tajriba= document.querySelector('.tajriba')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

const marCon = document.querySelector('.marCont')
const m1 = document.querySelector('.m1')
const box1 = document.querySelector('.box1')
const m2 = document.querySelector('.m2')
const box2 = document.querySelector('.box2')
const m3 = document.querySelector('.m3')
const box3 = document.querySelector('.box3')
const m4 = document.querySelector('.m4')
const box4 = document.querySelector('.box4')

const tajCon = document.querySelector('.tajCont')
const t1 = document.querySelector('.t1')
const taj1 = document.querySelector('.taj1')

const t2 = document.querySelector('.t2')
const taj2 = document.querySelector('.taj2')

const t3 = document.querySelector('.t3')
const taj3 = document.querySelector('.taj3')

const t4 = document.querySelector('.t4')
const taj4 = document.querySelector('.taj4')

const amlCon = document.querySelector('.amlCont')

const a1 = document.querySelector('.a1')
const aml1 = document.querySelector('.aml1')

const a2 = document.querySelector('.a2')
const aml2 = document.querySelector('.aml2')

const a3 = document.querySelector('.a3')
const aml3 = document.querySelector('.aml3')

const a4 = document.querySelector('.a4')
const aml4 = document.querySelector('.aml4')



maruza.addEventListener('click', ()=>{
    one.classList.add('active')
    two.classList.remove('active')
    three.classList.remove('active')

    marCon.classList.add('block')
    marCon.classList.add('active')
    tajCon.classList.remove('block')
    tajCon.classList.remove('active')
    amlCon.classList.remove('block')
    amlCon.classList.remove('active')

})

amalyot.addEventListener('click', ()=>{
    one.classList.remove('active')
    two.classList.add('active')
    three.classList.remove('active')
    tajCon.classList.remove('block')
    tajCon.classList.remove('active')
    marCon.classList.remove('block')
    marCon.classList.remove('active')
    amlCon.classList.add('block')

})

tajriba.addEventListener('click', ()=>{
    one.classList.remove('active')
    two.classList.remove('active')
    three.classList.add('active')

    tajCon.classList.add('block')
    marCon.classList.remove('active')
    marCon.classList.remove('block')
    amlCon.classList.remove('active')
    amlCon.classList.remove('block')
    
})

m1.addEventListener('click', ()=>{
    box1.classList.add('block')
    box3.classList.remove('block')
    box2.classList.remove("block")
    box4.classList.remove('block')

    taj1.classList.remove('block')
    taj2.classList.remove('block')

    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

m2.addEventListener('click',()=>{
    box2.classList.add('block')
    box3.classList.remove('block')
    box1.classList.remove('block')
    box4.classList.remove('block')

    taj1.classList.remove('block')
    taj2.classList.remove('block')

    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

m3.addEventListener('click',()=>{
    box3.classList.add('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
    box4.classList.remove('block')

    taj1.classList.remove('block')
    taj2.classList.remove('block')

    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

m4.addEventListener('click',()=>{
    box4.classList.add('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')

    taj1.classList.remove('block')
    taj2.classList.remove('block')

    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

t1.addEventListener('click',()=>{
    taj1.classList.add('block')
    taj2.classList.remove('block')
    taj3.classList.remove('block')
    taj4.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

t2.addEventListener('click',()=>{
    taj2.classList.add('block')
    taj1.classList.remove('block')
    taj4.classList.remove('block')
    taj3.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

t3.addEventListener('click',()=>{
    taj3.classList.add('block')
    taj4.classList.remove('block')
    taj2.classList.remove('block')
    taj1.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})
t4.addEventListener('click',()=>{
    taj4.classList.add('block')
    taj3.classList.remove('block')
    taj2.classList.remove('block')
    taj1.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
    aml1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

a1.addEventListener('click',()=>{
    aml1.classList.add('block')
    taj4.classList.remove('block')
    taj3.classList.remove('block')
    taj2.classList.remove('block')
    taj1.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
    aml2.classList.remove('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
})

a2.addEventListener('click',()=>{
    aml2.classList.add('block')
    aml3.classList.remove('block')
    aml4.classList.remove('block')
    aml1.classList.remove('block')
    taj4.classList.remove('block')
    taj3.classList.remove('block')
    taj2.classList.remove('block')
    taj1.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
})
a3.addEventListener('click',()=>{
    aml3.classList.add('block')
    aml4.classList.remove('block')
    aml2.classList.remove('block')
    aml1.classList.remove('block')
    taj4.classList.remove('block')
    taj3.classList.remove('block')
    taj2.classList.remove('block')
    taj1.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
})
a4.addEventListener('click',()=>{
    aml4.classList.add('block')
    aml3.classList.remove('block')
    aml2.classList.remove('block')
    aml1.classList.remove('block')
    taj4.classList.remove('block')
    taj3.classList.remove('block')
    taj2.classList.remove('block')
    taj1.classList.remove('block')
    box4.classList.remove('block')
    box3.classList.remove('block')
    box2.classList.remove('block')
    box1.classList.remove('block')
})