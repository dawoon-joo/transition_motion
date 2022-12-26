const frame = document.querySelector('section');
const box = frame.querySelectorAll('article');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', (e) => {
	e.preventDefault();
	//frame안쪽에서 제일 첫번째 자식요소를 맨뒤로 배치
	frame.append(frame.firstElementChild);
});

prev.addEventListener('click', (e) => {
	e.preventDefault();
	//frame안쪽에서 제일 마지막 자식요소를 맨앞에 배치
	frame.prepend(frame.lastElementChild);
});
