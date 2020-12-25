import React from "react";
import { Skeleton } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const SkeletonRow = ({ width }) => (
  <Tr>
    <Td>
      <Skeleton height="10px" w={width} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} />
    </Td>
  </Tr>
);

const SiteTableSkeleton = () => {
  return (
    <Table backgroundColor="white" borderRadius={8}>
      <Thead>
        <Tr>
          <Th color="gray.500">Name</Th>
          <Th color="gray.500">Site Link</Th>
          <Th color="gray.500">Feedback Link</Th>
          <Th color="gray.500">Date Added</Th>
          <Th>{""}</Th>
        </Tr>
      </Thead>
      <Tbody>
        <SkeletonRow width="75px" />
        <SkeletonRow width="125px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="100px" />
        <SkeletonRow width="75px" />
      </Tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
