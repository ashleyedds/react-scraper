import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/Api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import { Card, CardHeader, CardBody } from "reactstrap";

class Articles extends Component {
    state = {
        articles: [],
        savedArticles: [],
        searchTerm: "",
        startYear: "",
        endYear: ""
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSaved()
        .then(res =>{
            this.setState({ savedArticles: res.data });
            console.log(this.state.savedArticles);
        })
        .catch( err => console.log(err) );
    }

    saveArticle = articleInfo => {
        API.saveArticle(articleInfo)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.removeArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles({
            searchTerm: this.state.searchTerm,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        })
            .then( res => {
            console.log(res.data.response.docs);
            this.setState({
                articles: res.data.response.docs,
                searchTerm: '',
                startYear: '',
                endYear: ''
            })
            console.log(this.state.articles[0].multimedia[0].url);
            })
            .catch( err => console.log(err) );
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size="s=12">
                        <Jumbotron>
                            <h1>New York Times Article Scrubber</h1>
                            <h2>Search and save articles of interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                <Col size="s=12">
                    <CardHeader>Search for Articles</CardHeader>
                    <CardBody>
                        <form>
                            <Input
                                value={this.state.searchTerm}
                                onChange={this.handleInputChange}
                                id="searchTerm"
                                name="searchTerm"
                                placeholder="Topic"
                            />
                            <Input
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                id="startYear"
                                name="startYear"
                                placeholder="Start Year"
                            />
                            <Input
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                id="endYear"
                                name="endYear"
                                placeholder="End Year"
                            />
                            <FormBtn
                                onClick={this.handleFormSubmit}
                                >
                                Search
                            </FormBtn>
                        </form>
                    </CardBody>
                </Col>
            </Row>
            <Row>
                <Col size="s=12">
                    <CardHeader>Results</CardHeader>
                    <CardBody>
                        {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <ListItem
                                    key={article._id}
                                    _id={article._id}
                                    url={article.web_url}
                                    headline={article.headline.main}
                                    summary={article.snippet}
                                    date={article.pub_date}
                                    click={this.saveArticle}
                                    title="Add article"
                                    icon="save"
                                />
                                ))}
                            </List>
                        ) : (
                            <h3>No results to display</h3>
                        )}  
                    </CardBody>
                </Col>
            </Row>
            <Row>
                <Col size="s=12">
                    <CardHeader>Saved Articles</CardHeader>
                    <CardBody>
                    {this.state.savedArticles.length ? (
                            <List>
                                {this.state.savedArticles.map(savedArticle => (
                                    <ListItem
                                    key={savedArticle._id}
                                    _id={savedArticle._id}
                                    url={savedArticle.web_url}
                                    headline={savedArticle.headline.main}
                                    summary={savedArticle.snippet}
                                    image="https://placehold.it//210x140"
                                    date={savedArticle.pub_date}
                                    click={this.removeArticle}
                                    title="Remove article"
                                    icon="remove"
                                />
                                ))}
                            </List>
                        ) : (
                            <h3>No saved articles</h3>
                        )} 
                    </CardBody>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default Articles;

