let age: number;
let lastname: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;


age = 50;
lastname = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };

let anything: any;

anything = -20;
anything = 'Text';
anything = {};


let some: unknown;
some = 'Text';

let str: string;

if(typeof some === 'string') {
    str = some;
}

let person: [string, number];

person = ['Max', 21];

enum Status {LOADING, READY};

const personStatus = Status.READY;

if(personStatus === Status.READY) {
    console.log('Ready', personStatus);
}

let union: string | number;

union = 'Text';
union = 100;

let literal: 'enable' | 'disable';


function showMessage(message): void {
    console.log(message);
}


function calc(num1, num2): number {
    return num1 + num2;
}

function customError(): never{
    throw new Error('Error');
}

showMessage('Hello');
calc(10, 20);
// customError();


type Pages = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
        createAt: string;
        updateAt: string;
    }
}



const page1: Pages = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
}

const page2: Pages = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}

console.log(page1, page2);