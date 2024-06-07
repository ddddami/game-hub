import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import GenreList from "./GenreList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  placement?: "left" | "right";
}

const DrawerComponent = ({ isOpen, onClose, placement = "left" }: Props) => {
  return (
    <>
      <Drawer size="xs" isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
