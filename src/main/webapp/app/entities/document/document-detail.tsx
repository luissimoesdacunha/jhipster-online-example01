import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './document.reducer';
import { IDocument } from 'app/shared/model/document.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDocumentDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DocumentDetail = (props: IDocumentDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { documentEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsteronlineexample01App.document.detail.title">Document</Translate> [<b>{documentEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="title">
              <Translate contentKey="jhipsteronlineexample01App.document.title">Title</Translate>
            </span>
          </dt>
          <dd>{documentEntity.title}</dd>
          <dt>
            <span id="size">
              <Translate contentKey="jhipsteronlineexample01App.document.size">Size</Translate>
            </span>
          </dt>
          <dd>{documentEntity.size}</dd>
          <dt>
            <span id="mimeType">
              <Translate contentKey="jhipsteronlineexample01App.document.mimeType">Mime Type</Translate>
            </span>
          </dt>
          <dd>{documentEntity.mimeType}</dd>
          <dt>
            <Translate contentKey="jhipsteronlineexample01App.document.content">Content</Translate>
          </dt>
          <dd>{documentEntity.content ? documentEntity.content.id : ''}</dd>
          <dt>
            <Translate contentKey="jhipsteronlineexample01App.document.car">Car</Translate>
          </dt>
          <dd>{documentEntity.car ? documentEntity.car.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/document" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/document/${documentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ document }: IRootState) => ({
  documentEntity: document.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetail);
