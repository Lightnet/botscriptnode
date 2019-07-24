<template>
    <div>
        <aistatus/>
        <aivirtualspace/>
        
        <aiapp/>
        <aitask/>
        <aiscripts/>
        <aidatabase/>
        <aisettings/>

        <chatpattern/>

    </div>
</template>

<script>
import AIStatus from './AIStatus';
import ChatPattern from './ChatPattern';
import AIApp from './AIApp';
import AIVirtualSpace from './AIVirtualSpace';
import AIInventory from './AIInventory';
import AITask from './AITask';

import AINotes from './AINotes';
import AIScripts from './AIScripts';
import AIDatabase from './AIDatabase';
import AISettings from './AISettings';

export default {
    components: {
        'aistatus':AIStatus,
        'aiapp':AIApp,
        'aivirtualspace':AIVirtualSpace,
        'aiinventory':AIInventory,
        'aitask':AITask,
        'aiscripts':AIScripts,
        'aidatabase':AIDatabase,
        'aisettings':AISettings,
        'chatpattern':ChatPattern,
    },
    data() {
        return {
            //currentView: 'access',
        }
    }
}

</script>
<style>


</style>