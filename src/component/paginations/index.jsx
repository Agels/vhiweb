import {Pagination} from 'react-bootstrap';

const Paginations = (props) => {
  
    return (
        <Pagination>
        <Pagination.Prev
          disabled={props.number <= 1}
          onClick={() => props.setNumber(props.number - 1)}
        />
        {props.pageNumber.map((Elem, index) => {
          return (
            <>
              <Pagination.Item
                key={index}
                variant="danger"
                active={Elem === props.number}
                onClick={() => props.ChangePage(Elem)}
              >
                {Elem}
              </Pagination.Item>
            </>
          );
        })}
        <Pagination.Next
          onClick={() => props.setNumber(props.number + 1)}
          disabled={props.number >= props.pageNumber.length}
        />
      </Pagination>
    )
} 

export default Paginations;