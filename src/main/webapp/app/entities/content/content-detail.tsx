import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './content.reducer';
import { IContent } from 'app/shared/model/content.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IContentDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ContentDetail = (props: IContentDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { contentEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsteronlineexample01App.content.detail.title">Content</Translate> [<b>{contentEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="data">
              <Translate contentKey="jhipsteronlineexample01App.content.data">Data</Translate>
            </span>
          </dt>
          <dd>
            {contentEntity.data ? (
              <div>
                {contentEntity.dataContentType ? (
                  <a onClick={openFile(contentEntity.dataContentType, contentEntity.data)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {contentEntity.dataContentType}, {byteSize(contentEntity.data)}
                </span>
              </div>
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/content" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/content/${contentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ content }: IRootState) => ({
  contentEntity: content.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetail);
