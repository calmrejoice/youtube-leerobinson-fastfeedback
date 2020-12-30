import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const SiteTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.700" fontSize="sm">
            Sites
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex direction="row" justifyContent="space-between">
        <Heading mb={4}>My Sites</Heading>
        <AddSiteModal>+ Add Site</AddSiteModal>
      </Flex>
    </>
  );
};

export default SiteTableHeader;
