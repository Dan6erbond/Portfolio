import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsHouse } from "react-icons/bs";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <Container>
      <Row>
        <Col className="text-center">
          <h1>404: Not Found</h1>
          <br />
          <Link to="/" className="btn btn-outline-primary flat-button">
            <BsHouse /> Return to Home
          </Link>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;
