import React from 'react';
import './App.css';

const green = 'transparent';
const yellow = '#FFD712';
const hiddSol = 'Solution';
const solution = 'This is a squirrel, that lives on the tree It can climb and jump from tree to tree, because it has strong legs and sharp nails. It looks cute with its fur, very long tail, and little teeth that uses for cracking nuts.';
const pic1 = {
  src: 'http://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg'
};
const pic2 = {
  src: 'http://pngimg.com/uploads/tree/tree_PNG3489.png'
};
const pic3 = {
  src: 'http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/j/ju/jumping/jumping_1.jpg'
};
const pic4 = {
  src: 'http://www.rgbstock.com/cache1oVilg/users/t/tz/tzooka/300/mC07Qd6.jpg'
};
const pic5 = {
  src: 'http://media-cache-ak0.pinimg.com/736x/ab/cc/18/abcc18bec4e9a61e6dfbd0fe87cfa106.jpg'
};
const pic6 = {
  src: 'https://i.pinimg.com/736x/ed/7f/0d/ed7f0deaec0e177955a23d9c3ee7a00b--extinct-animals-animal-anatomy.jpg'
};
const pic7 = {
  src: 'https://bgfons.com/uploads/fur/fur_texture1720.jpg'
};
const pic8 = {
  src: 'http://moziru.com/images/tail-clipart-2.png'
};
const pic9 = {
  src: 'https://eastcraigsprimary.files.wordpress.com/2016/06/189761-orangutan-brushing-teeth.jpg'
};
const pic10 = {
  src: 'http://upload.wikimedia.org/wikipedia/commons/c/c3/Nut_fruit_stock_photo.jpg'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green,
      name: 'Solution',
      word: '_____',
      word2: '_____',
      word3: '_____',
      word4: '_____',
      word5: '_____',
      word6: '_____',
      word7: '_____',
      word8: '_____',
      word9: '_____',
      word10: '_____'
    };
    this.changeColor = this.changeColor.bind(this);
    this.toggleName = this.toggleName.bind(this);
    this.changeword = this.changeword.bind(this);
    this.changeword2 = this.changeword2.bind(this);
    this.changeword3 = this.changeword3.bind(this);
    this.changeword4 = this.changeword4.bind(this);
    this.changeword5 = this.changeword5.bind(this);
    this.changeword6 = this.changeword6.bind(this);
    this.changeword7 = this.changeword7.bind(this);
    this.changeword8 = this.changeword8.bind(this);
    this.changeword9 = this.changeword9.bind(this);
    this.changeword10 = this.changeword10.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == 'green' ? 'yellow' : 'green';
    this.setState({
      color: newColor
    });
  }

  toggleName() {
    const newName = this.state.name == solution ? hiddSol : solution;
    this.setState({
      name: newName
    });
  }

  changeword(newword) {
    this.setState({
      word: newword,
    });
  }

  changeword2(newword2) {
    this.setState({
      word2: newword2,
    });
  }

  changeword3(newword3) {
    this.setState({
      word3: newword3
    });
  }

  changeword4(newword4) {
    this.setState({
      word4: newword4
    });
  }

  changeword5(newword5) {
    this.setState({
      word5: newword5,
    });
  }

  changeword6(newword6) {
    this.setState({
      word6: newword6
    });
  }

  changeword7(newword7) {
    this.setState({
      word7: newword7
    });
  }

  changeword8(newword8) {
    this.setState({
      word8: newword8,
    });
  }

  changeword9(newword9) {
    this.setState({
      word9: newword9
    });
  }

  changeword10(newword10) {
    this.setState({
      word10: newword10
    });
  }

  render() {
    return (
      <div style={{ background: this.state.color }} className="body">
        <p className="sol">{this.state.name}</p>
        <button className="solButt" onClick={this.toggleName}>
          Show & Hide
        </button>
        <Child onChange={this.changeword} />
        <Child2 onChange={this.changeword2} />
        <Child3 onChange={this.changeword3} />
        <Child4 onChange={this.changeword4} />
        <Child5 onChange={this.changeword5} />
        <Child6 onChange={this.changeword6} />
        <Child7 onChange={this.changeword7} />
        <Child8 onChange={this.changeword8} />
        <Child9 onChange={this.changeword9} />
        <Child10 onChange={this.changeword10} />
        <img className="backgr" src="http://www.hdwallpapers.in/walls/green_leafs-wide.jpg" />
        <Sibling word={this.state.word} word2={this.state.word2} word3={this.state.word3} word4={this.state.word4} word5={this.state.word5} word6={this.state.word6} word7={this.state.word7} word8={this.state.word8} word9={this.state.word9} word10={this.state.word10} />
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return <div>
      <h1>Hello, {this.props.name2}</h1>
    </div>
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const word = e.target.value;
    this.props.onChange(word);
  }

  render() {
    return (
      <div>
        <select className="sel1" id="great-names" onChange={this.handleChange}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange2(e) {
    const word2 = e.target.value;
    this.props.onChange(word2);
  }

  render() {
    return (
      <div>
        <select className="sel2" onChange={this.handleChange2}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange3(e) {
    const word3 = e.target.value;
    this.props.onChange(word3);
  }

  render() {
    return (
      <div>
        <select className="sel3" onChange={this.handleChange3}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child4 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange4 = this.handleChange4.bind(this);
  }

  handleChange4(e) {
    const word4 = e.target.value;
    this.props.onChange(word4);
  }

  render() {
    return (
      <div>
        <select className="sel4" onChange={this.handleChange4}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child5 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange5 = this.handleChange5.bind(this);
  }

  handleChange5(e) {
    const word5 = e.target.value;
    this.props.onChange(word5);
  }

  render() {
    return (
      <div>
        <select className="sel5" onChange={this.handleChange5}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child6 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange6 = this.handleChange6.bind(this);
  }

  handleChange6(e) {
    const word6 = e.target.value;
    this.props.onChange(word6);
  }

  render() {
    return (
      <div>
        <select className="sel6" onChange={this.handleChange6}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child7 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange7 = this.handleChange7.bind(this);
  }

  handleChange7(e) {
    const word7 = e.target.value;
    this.props.onChange(word7);
  }

  render() {
    return (
      <div>
        <select className="sel7" onChange={this.handleChange7}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child8 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange8 = this.handleChange8.bind(this);
  }

  handleChange8(e) {
    const word8 = e.target.value;
    this.props.onChange(word8);
  }

  render() {
    return (
      <div>
        <select className="sel8" onChange={this.handleChange8}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child9 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange9 = this.handleChange9.bind(this);
  }

  handleChange9(e) {
    const word9 = e.target.value;
    this.props.onChange(word9);
  }

  render() {
    return (
      <div>
        <select className="sel9" onChange={this.handleChange9}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Child10 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange10 = this.handleChange10.bind(this);
  }

  handleChange10(e) {
    const word10 = e.target.value;
    this.props.onChange(word10);
  }

  render() {
    return (
      <div>
        <select className="sel10" onChange={this.handleChange10}>
          <option value="__________">__________</option>
          <option value="nails">nails</option>
          <option value="a squirrel">a squirrel</option>
          <option value="teeth">teeth</option>
          <option value="fur">fur</option>
          <option value="climb">climb</option>
          <option value="jump">jump</option>
          <option value="legs">legs</option>
          <option value="tail">tail</option>
          <option value="the tree">the tree</option>
        </select>
      </div>
    );
  }
}

class Sibling extends React.Component {
  render() {
    let word = this.props.n;
    let word2 = this.props.n2;
    return (
      <div>
        <div className="imgages">
          <img className="img1"
            src={pic1.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img2"
            src={pic2.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img3"
            src={pic3.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img4"
            src={pic4.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img5"
            src={pic5.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img6"
            src={pic6.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img7"
            src={pic7.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img8"
            src={pic8.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img9"
            src={pic9.src}
            alt={pic1.alt}
            width={pic1.width} />
          <img className="img10"
            src={pic10.src}
            alt={pic1.alt}
            width={pic1.width} />
        </div>
        <Sibling1 {...this.props} />
      </div>
    );
  }
}

class Sibling1 extends React.Component {
  render() {
    let word = this.props.word;
    let word2 = this.props.word2;
    let word3 = this.props.word3;
    let word4 = this.props.word4;
    let word5 = this.props.word5;
    let word6 = this.props.word6;
    let word7 = this.props.word7;
    let word8 = this.props.word8;
    let word9 = this.props.word9;
    let word10 = this.props.word10;

    return (
      <div className="t1">
        <p>  This is <b>{word}</b>, that lives on <b>{word2}.</b> It can <b>{word3}</b> and <b>{word4}</b> because it has strong <b>{word5}</b> and sharp <b>{word6}</b>. It looks cute with its <b>{word7}</b>, very long <b>{word8}</b>, and little <b>{word9}</b>  which it use for cracking <b>{word10}</b>.
       </p>
      </div>
    );
  }
}

export default App;
