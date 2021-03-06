import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Places from "../components/Places/Places"

export const query = graphql`
query {
    placeBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
    }
}
`;

const places = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.placeBcg.childImageSharp.fluid}>
                Places page
            </StyledHero>
            <Places />
        </Layout>
    )
}

export default places
