import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Tile from './Tile';
import Summary from '../Summary';
import Filter from './Filter';

const MosaicHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 50px;
`;

const tagger = items => {
  const tags = [];
  items.forEach(each => {
    each.frontmatter.tags.forEach(tag => tags.push(tag));
  });
  return [...new Set(tags)];
};

class Mosaic extends Component {
  constructor(props) {
    super(props);
    const { items } = this.props;

    this.state = {
      tags: {},
    };

    const tags = tagger(items);

    tags.forEach(each => {
      const { state } = this;
      state.tags[each] = false;
    });

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(e) {
    const { tags } = this.state;
    tags[e] = !tags[e];

    this.setState({ tags });
  }

  render() {
    const { items, color, path, summary } = this.props;
    const { tags } = this.state;
    const checkedTags = Object.keys(tags).filter(tag => tags[tag] === true);
    const hasTrue = Object.values(tags).includes(true);

    return (
      <Fade>
        {summary && <Summary summary={summary} color={color} />}
        <Filter tags={tags} check={this.handleCheckbox} color={color} />
        <MosaicHolder className="portfolio">
          {items
            .filter(each => {
              if (hasTrue) {
                const tileTags = each.frontmatter.tags;
                return tileTags.some(tag => checkedTags.includes(tag));
              }
              return each;
            })
            .map(({ frontmatter, fullPath }) => {
              return (
                <Tile
                  fromPath={path}
                  color={color}
                  front={frontmatter}
                  fullPath={fullPath}
                  key={uuid()}
                />
              );
            })}
        </MosaicHolder>
      </Fade>
    );
  }
}

Mosaic.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape(),
      fullPath: PropTypes.string,
    })
  ).isRequired,
  color: PropTypes.string,
  path: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

Mosaic.defaultProps = {
  color: 'black',
};

export default Mosaic;
