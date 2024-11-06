export default interface DTO {
  [key: string]: DTOValue | DTOValue[];
}

type DTOValue = Primitive | DTO;

type Primitive = string | number | boolean | null;
