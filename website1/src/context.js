 import React , {Component} from "react";

const Context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        switch(action){
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;
            case "ADD_BLOG":
                this.setState({
                    blogs: [newObject, ...this.state.blogs],
                });
                 break;
            case "ADD_RECOMMENDATION":
                 this.setState({
                    recommendations: [newObject, ...this.state.recommendations],
                    });
                    break;

        }
    };
    
    state={
        handler : this.handler,
        blogs : [
            {
                id:1,
                title: "Blog 1",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my blog about...",
            },
            {
                id:2,
                title: "Blog 2",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                excerpt:"This is my blog about...",
            },
            {
                id:3,
                title:"Blog 3",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
                excerpt: "This is my blog about...",
            },
        ],
        recommendations : [
            {
                id : 1 ,
                name : "Random Guy1",
                company : "ABC Company",
                designation : "CEO",
                message : "She is a good engineer",
            },
            {
                id : 2 ,
                name : "Random Guy2",
                company : "ABC Company",
                designation : "CEO",
                message : "She is a lazy person",
            },
            {
                id : 3 ,
                name : "Random Guy3",
                company : "ABC Company",
                designation : "CEO",
                message : "She is a logical",
            },
            {
                id : 4 ,
                name : "Random Guy4",
                company : "ABC Company",
                designation : "CEO",
                message : "She does things fast",
            },        
        ],
        skills:[
            {
                id:1,
                name: "HTML5",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/html5.png",
                starsTotal: 5,
                starsActive: 3,
            },
            {
                id:2,
                name: "CSS3",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/css3.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:3,
                name: "JAVASCRIPT",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id:4,
                name: "BOOTSTRAP4",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id:5,
                name: "REACT",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/react.png",
                starsTotal: 3,
                starsActive: 3,        
            },
            {
                id:6,
                name: "MYSQL",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
                starsTotal: 3,
                starsActive: 2,        
            },
            {
                id:7,
                name: "PYTHON",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/python.png",
                starsTotal: 3,
                starsActive: 3,        
            },
            {
                id:8,
                name: "FLASK",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/flask.png",
                starsTotal: 3,
                starsActive: 2,        
            },
            {
                id:9,
                name: "MYSQL",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
                starsTotal: 3,
                starsActive: 2,        
            },
            {
                id:10,
                name: "PYTHON",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/python.png",
                starsTotal: 3,
                starsActive: 3,        
            },
            {
                id:11,
                name: "FLASK",
                imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/flask.png",
                starsTotal: 3,
                starsActive: 2,        
            },
    
        ],
        projects:[
            {
                id:1,
                title: "Project 1",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my project about...",
                body: "Body 1",
            },
            {
                id:2,
                title: "Project 2",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                excerpt:"This is my project about...",
                body: "Body 2",
            },
            {
                id:3,
                title:"Project 3",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
                excerpt: "This is my project about...",
                body: "Body 3",
            },
            {
                id:4,
                title:"Project 4",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my project about...",
                body: "Body 4",
            },
            {
                id:5,
                title:"Project 5",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                excerpt: "This is my project about...",
                body: "Body 5",
            },
        ],
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }

}

export const Consumer = Context.Consumer;