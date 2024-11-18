'use strict'
function BurgerMenu()
{
	this.burgerBtn = document.querySelector('._burger')
	this.list = document.querySelector('._list')
	this.init = function()
	{
		this.burgerBtn.addEventListener('click', ()=>
		{
			this.showMenu()
		})
	}
	this.showMenu = function()
	{
		if(this.burgerBtn.classList.contains('active'))
		{
			this.burgerBtn.classList.remove('active')
			this.list.classList.remove('active')
		}
		else
		{
			this.burgerBtn.classList.add('active')
			this.list.classList.add('active')
		}
	}
}
function ProductionMenu(stepCount)
{
	this.buttonsLeft = document.querySelector('._buttonsLeft')
	this.buttonsRight = document.querySelector('._buttonsRight')
	this.productionLine = document.querySelector('._productionLine')
	this.totalCount = document.querySelector('._totalCount')
	this.currentSlide = document.querySelector('._currentSlide')
	this.divResult = this.productionLine.querySelector('div')

	this.stepCount = stepCount
	this.stepSize = this.productionLine.offsetWidth / this.stepCount
	
	this.step = 184;
	this.count = 1;

	this.slides = document.querySelectorAll('._slide')
	this.slideStep = 0;
	this.counter = 0;

	this.moveLine = function()
	{
		this.buttonsRight.addEventListener('click', ()=>
		{
			this.moveRight()
			if(this.counter >= this.slides.length - 1) return;
			this.moveSlides('next')
		})
		this.buttonsLeft.addEventListener('click', ()=>
		{
			this.moveLeft()
			if(this.slideStep <= 0) return;
			this.moveSlides()
			console.log('prev',this.counter)
		})
		this.currentSlide.innerText = 1
		this.totalCount.innerText = this.stepCount
	}
	this.moveRight = function()
	{
		if(this.count === this.stepCount) return;

		this.step += +this.stepSize.toFixed()
		this.counterSizeLine('add', this.step)
	}
	this.moveLeft = function()
	{
		if(this.count <= 1)return
		this.step -= +this.stepSize.toFixed()
		this.counterSizeLine('remove', this.step)	
	}
	this.counterSizeLine = function(counterChange, step)
	{
		counterChange === 'add' ? this.count++ :
			this.count--
		this.currentSlide.innerText = this.count
		this.divResult.style.width = step + 'px'
	}
	this.moveSlides = function(action)
	{
		if(action === 'next')
		{
			this.counter++
			this.slideStep += this.slides[0].offsetWidth
		}
		else
		{
			this.counter--
			this.slideStep -= this.slides[0].offsetWidth
		}
		this.slides.forEach((el)=>
		{
			el.style.transform = `translateX(-${this.slideStep}px)`
		})
	}
	
}

function Tab()
{
	this.contents = document.querySelectorAll('._content')
	this.tabBtns = document.querySelectorAll('._tabBtn')
	this.init = function()
	{
		this.tabBtns.forEach((el,index)=>
		{
			el.addEventListener('click', ()=>
			{
				this.deleteStateActive(this.tabBtns, 'active')
				this.deleteStateActive(this.contents, 'active')
				el.classList.add('active')
				this.contents[index].classList.add('active')
			})
		})
	}
	this.deleteStateActive = function(arr, className)
	{
		arr.forEach((el)=>
		{
			el.classList.remove(className)
		})
	}
}
function Tap()
{
	this.newTap = document.querySelectorAll('._tapLink')
	this.tapLink = function(color)
	{
		this.newTap.forEach(function(el)
		{
			el.addEventListener('click', function()
			{
				event.preventDefault();
				el.style.backgroundColor = color;
			})
		})
	}
}

// function Selector(btn, list, itms)
// {
// 	this.btn = btn
// 	this.list = list
// 	this.itms = itms
// 	this.init = function()
// 	{
// 		this.btn.addEventListener('click', ()=>
// 		{
// 			if(this.list.classList.contains('active'))
// 				this.list.classList.remove('active')
// 			else
// 				this.list.classList.add('active')
// 		})
// 		this.addClickEls()
// 	}
// 	this.addClickEls = function()
// 	{
// 		this.itms.forEach((el)=>
// 		{
// 			el.addEventListener('click',()=>
// 			{
// 				this.btn.innerText = el.innerText
// 			})
// 		})
// 	}
// }

let burger = new BurgerMenu
burger.init()

let productionMenu = new ProductionMenu(3)
productionMenu.moveLine()

let tab = new Tab
tab.init()

let taps = new Tap
taps.tapLink('green')

// let sel = new Selector(document.querySelector('._ch'),document.querySelector('._lists'), document.querySelectorAll('._item'))
// sel.init()





