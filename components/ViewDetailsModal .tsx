import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface ViewDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, any>;
}

export const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Patient Details</DialogTitle>
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => (
            <p key={key} className="text-sm">
              <span className="font-medium capitalize">{key}: </span>
              {value?.toString() || "N/A"}
            </p>
          ))}
        </div>
        <Button variant="outline" onClick={onClose} className="mt-4">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};
