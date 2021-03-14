import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './document.reducer';
import { IDocument } from 'app/shared/model/document.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDocumentProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Document = (props: IDocumentProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { documentList, match, loading } = props;
  return (
    <div>
      <h2 id="document-heading">
        <Translate contentKey="jhipsteronlineexample01App.document.home.title">Documents</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsteronlineexample01App.document.home.createLabel">Create new Document</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {documentList && documentList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsteronlineexample01App.document.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsteronlineexample01App.document.size">Size</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsteronlineexample01App.document.mimeType">Mime Type</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsteronlineexample01App.document.content">Content</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsteronlineexample01App.document.car">Car</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {documentList.map((document, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${document.id}`} color="link" size="sm">
                      {document.id}
                    </Button>
                  </td>
                  <td>{document.title}</td>
                  <td>{document.size}</td>
                  <td>{document.mimeType}</td>
                  <td>{document.content ? <Link to={`content/${document.content.id}`}>{document.content.id}</Link> : ''}</td>
                  <td>{document.car ? <Link to={`car/${document.car.id}`}>{document.car.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${document.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${document.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${document.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="jhipsteronlineexample01App.document.home.notFound">No Documents found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ document }: IRootState) => ({
  documentList: document.entities,
  loading: document.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Document);
