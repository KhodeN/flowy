import { Modal } from 'antd';
import { useEffect } from 'react';

/**
 * close all modals on destroy
 */
export function useDestroyAllModals() {
   useEffect(() => () => Modal.destroyAll(), []);
}
