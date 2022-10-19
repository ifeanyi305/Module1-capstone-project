const hambuger = document.querySelector(' .hambuger');
hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
});
const anchor = document.querySelectorAll('.nav-item');
for (let i = 0; i < anchor.length; i += 1) {
  anchor[i].addEventListener('click', () => {
    hambuger.classList.remove('active');
  });
}

const featured = [
  {
    speaker: 'images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies, Harvard Law School',
    school: 'Benkler studies commons-based peer production, the Internet, and the law. He is the author of The Wealth of Networks: How Social Production Transforms Markets and Freedom (Yale University Press, 2006)',
  },
  {
    speaker: 'images/speaker_02.png',
    name: 'SohYeong Noh',
    profession: 'Director of Art Center Nabi, Seoul, Korea and Board Member of Creative Commons Korea',
    school: 'As the main venue for new media art production in Korea, Nabi promotes cross-discliplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    speaker: 'images/speaker_03.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    school: 'Ryan had been leading open source and open data projects for over 15 years. He is the co-founder of the Open Source Initiative, the Open Source Hardware Association, and the Open Data Institute.',
  },
  {
    speaker: 'images/speaker_04.png',
    name: 'Lila Tretikov',
    profession: 'Executive Director of Creative Commons, Former Executive Director of the Wikimedia Foundation',
    school: 'Lila Tretikov is the Executive Director of Creative Commons, a nonprofit organization that enables the sharing and use of creativity and knowledge through free legal tools. She is also a member of the Board of Directors of the Open Technology Institute at New America.',
  },
  {
    speaker: 'images/speaker_05.png',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe, Member of the European Parliament',
    school: 'European ingetration, political democracy, and participation of youth through online as her major condemn, Redia’s report outlines the need for a new European political culture, based on the principles of openness, transparency, and participation.',
  },
  {
    speaker: 'images/speaker_06.png',
    name: 'Kilnam Chon',
    profession: 'Data science. Data visualization ; Python. Tim Cook. UX design ; Arduino. Cloud platforms. Raspberry Pi ; Clubhouse. Linux. Web development',
    school: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society’s Internet Hall of Fame. He is currently the CEO of the Internet Society.',
  },
];

const wholeSpeakers = document.getElementById('speakers-grid');

const firstSpeaker = document.createElement('div');
firstSpeaker.className = 'speaker';
wholeSpeakers.appendChild(firstSpeaker);

const imgOne = document.createElement('img');
imgOne.className = 'image';
imgOne.setAttribute(
  'src',
  featured[0].speaker,
);
firstSpeaker.appendChild(imgOne);

const description = document.createElement('div');
description.className = 'description-wrapper';
firstSpeaker.appendChild(description);

const namesOne = document.createElement('h3');
namesOne.textContent = featured[0].name;
description.appendChild(namesOne);

const workOne = document.createElement('p');
workOne.className = 'sub-heading push';
workOne.textContent = featured[0].profession;
description.appendChild(workOne);

const studyOne = document.createElement('span');
studyOne.className = 'institution';
studyOne.textContent = featured[0].school;
description.appendChild(studyOne);

const secondSpeaker = document.createElement('div');
secondSpeaker.className = 'speaker';
wholeSpeakers.appendChild(secondSpeaker);

const imgtwo = document.createElement('img');
imgtwo.setAttribute(
  'src',
  featured[1].speaker,
);
secondSpeaker.appendChild(imgtwo);

const descriptiontwo = document.createElement('div');
descriptiontwo.className = 'description-wrapper';
secondSpeaker.appendChild(descriptiontwo);

const namestwo = document.createElement('h3');
namestwo.textContent = featured[1].name;
descriptiontwo.appendChild(namestwo);

const worktwo = document.createElement('p');
worktwo.className = 'sub-heading push';
worktwo.textContent = featured[1].profession;
descriptiontwo.appendChild(worktwo);

const studytwo = document.createElement('span');
studyOne.className = 'institution';
studytwo.textContent = featured[1].school;
descriptiontwo.appendChild(studytwo);

const thirdSpeaker = document.createElement('div');
thirdSpeaker.className = 'speaker';
wholeSpeakers.appendChild(thirdSpeaker);

const imgthree = document.createElement('img');
imgthree.setAttribute(
  'src',
  featured[2].speaker,
);
thirdSpeaker.appendChild(imgthree);

const descriptionthree = document.createElement('div');
descriptionthree.className = 'description-wrapper';
thirdSpeaker.appendChild(descriptionthree);

const namesthree = document.createElement('h3');
namesthree.textContent = featured[2].name;
descriptionthree.appendChild(namestwo);

const workthree = document.createElement('p');
workthree.className = 'sub-heading push';
workthree.textContent = featured[2].profession;
descriptionthree.appendChild(workthree);

const studythree = document.createElement('span');
studyOne.className = 'institution';
studythree.textContent = featured[2].school;
descriptionthree.appendChild(studythree);

const fourthSpeaker = document.createElement('div');
fourthSpeaker.className = 'speaker';
wholeSpeakers.appendChild(fourthSpeaker);

const imgfour = document.createElement('img');
imgfour.setAttribute(
  'src',
  featured[3].speaker,
);
fourthSpeaker.appendChild(imgfour);

const descriptionfour = document.createElement('div');
descriptionfour.className = 'description-wrapper';
fourthSpeaker.appendChild(descriptionfour);

const namesfour = document.createElement('h3');
namesfour.textContent = featured[3].name;
descriptionfour.appendChild(namesfour);

const workfour = document.createElement('p');
workfour.className = 'sub-heading push';
workfour.textContent = featured[3].profession;
descriptionfour.appendChild(workfour);

const studyfour = document.createElement('span');
studyOne.className = 'institution';
studyfour.textContent = featured[3].school;
descriptionfour.appendChild(studyfour);

const fifthSpeaker = document.createElement('div');
fifthSpeaker.className = 'speaker';
wholeSpeakers.appendChild(fifthSpeaker);

const imgfive = document.createElement('img');
imgfive.setAttribute(
  'src',
  featured[4].speaker,
);
fifthSpeaker.appendChild(imgfive);

const descriptionfive = document.createElement('div');
descriptionfive.className = 'description-wrapper';
fifthSpeaker.appendChild(descriptionfive);

const namesfive = document.createElement('h3');
namesfive.textContent = featured[4].name;
descriptionfive.appendChild(namesfive);

const workfive = document.createElement('p');
workfive.className = 'sub-heading push';
workfive.textContent = featured[4].profession;
descriptionfive.appendChild(workfive);

const studyfive = document.createElement('span');
studyOne.className = 'institution';
studyfive.textContent = featured[4].school;
descriptionfive.appendChild(studyfive);

const sixthSpeaker = document.createElement('div');
sixthSpeaker.className = 'speaker';
wholeSpeakers.appendChild(sixthSpeaker);

const imgsix = document.createElement('img');
imgsix.setAttribute(
  'src',
  featured[5].speaker,
);
sixthSpeaker.appendChild(imgsix);

const descriptionsix = document.createElement('div');
descriptionsix.className = 'description-wrapper';
sixthSpeaker.appendChild(descriptionsix);

const namesSix = document.createElement('h3');
namesSix.textContent = featured[5].name;
descriptionsix.appendChild(namesSix);

const worksix = document.createElement('p');
worksix.className = 'sub-heading push';
worksix.textContent = featured[5].profession;
descriptionsix.appendChild(worksix);

const studysix = document.createElement('span');
studyOne.className = 'institution';
studysix.textContent = featured[5].school;
descriptionsix.appendChild(studysix);
