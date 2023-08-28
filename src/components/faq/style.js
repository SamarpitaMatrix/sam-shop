import styled from 'styled-components';

export const FaqDiv=styled.div`
.blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  .blockquote-footer {
    display: block;
    font-size: 80%;
    color: #6c757d;
  }
  
  .blockquote-footer::before {
    content: "\2014\00A0";
  }
`;