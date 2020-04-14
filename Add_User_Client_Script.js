function($scope) {
    var c = this;
    c.showRow = false;
    c.obj = ($scope.page.g_form.getValue('move_others_mrvs').length != 0) ? JSON.parse($scope.page.g_form.getValue('move_others_mrvs')) : [];

    var interval = setInterval(function () {
        var a = document.querySelector('#move_others_mrvs > div');
        //a.style.display = 'none';
        if (a) {
            a.style.display = 'none';
            clearInterval(interval);
        }

    }, 1000);

    c.sendData = function () {
        var itemsToBeRequested = [];
        var existingItems = [];
        var vmOptionsList = [];

        itemsToBeRequested = $scope.page.g_form.getValue('items_that_can_be_requested_new_as_part_of_a_move_Vs');
        existingItems = $scope.page.g_form.getValue('existing_items_to_move_with_employees_Vs');
        vmOptionsList = $scope.page.g_form.getValue('voicemail_Vs');

        if (vmOptionsList != '') {
            var vmCheck = 'true';
        }

        var keyboard_trays_Value = c.getListValues(c.data.keyboard_trays_new_, itemsToBeRequested, c.data.keyboard_trays_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.keyboard_trays_new_, itemsToBeRequested, c.data.keyboard_trays_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var artwork_Value = c.getListValues(c.data.artwork_new_, itemsToBeRequested, c.data.artwork_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.artwork_new_, itemsToBeRequested, c.data.artwork_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var corner_sleeves_Value = c.getListValues(c.data.corner_sleeves_new_, itemsToBeRequested, c.data.corner_sleeves_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.corner_sleeves_new_, itemsToBeRequested, c.data.corner_sleeves_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var monitor_arms_Value = c.getListValues(c.data.monitor_arms_new_, itemsToBeRequested, c.data.monitor_arms_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.monitor_arms_new_, itemsToBeRequested, c.data.monitor_arms_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var ergotrons_Value = c.getListValues(c.data.ergotrons_new_, itemsToBeRequested, c.data.ergotrons_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.ergotrons_new_, itemsToBeRequested, c.data.ergotrons_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var height_adjustable_table_Value = c.getListValues(c.data.height_adjustable_table_new_, itemsToBeRequested, c.data.height_adjustable_table_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.height_adjustable_table_new_, itemsToBeRequested, c.data.height_adjustable_table_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var whiteboards_offices_only_Value = c.getListValues(c.data.whiteboards_offices_only_new_, itemsToBeRequested, c.data.whiteboards_offices_only_existing_, existingItems) == 'new' ? "new" :
            c.getListValues(c.data.whiteboards_offices_only_new_, itemsToBeRequested, c.data.whiteboards_offices_only_existing_, existingItems) == 'existing' ? "existing" :
                "none";

        var raise_kit_Value = c.getListValues(c.data.raise_kit_new_, itemsToBeRequested, c.data.raise_kit_existing_, existingItems) == 'existing' ? 'true' : 'false';
        var ergotrons_acc_Value = c.getListValues(c.data.ergotrons_acc_new_, itemsToBeRequested, c.data.ergotrons_acc_existing_, existingItems) == 'new' ? 'true' : 'false';
        var desktop_power_module_Value = c.getListValues(c.data.desktop_power_module_new_, itemsToBeRequested, c.data.desktop_power_module_existing_, existingItems) == 'new' ? 'true' : 'false';
        var seat_orientation_Value = $scope.page.g_form.getValue('seat_orientation_options_Vs') == 'Corner' ? 'Corner' : $scope.page.g_form.getValue('seat_orientation_options_Vs') == 'Straight' ? 'straight' : '';
        var other_Value = c.getListValues(c.data.other_new_, itemsToBeRequested, c.data.other_existing_, existingItems) == 'existing' ? 'true' : 'false';

        /* VM Values */
        var vmOption_Value = c.getVmOptionsValues(c.data.vmOption, vmOptionsList) == 'true' ? 'true' : 'false';
        var mbOption_Value = c.getVmOptionsValues(c.data.mbOption, vmOptionsList) == 'true' ? 'true' : 'false';
        var speechOption_Value = c.getVmOptionsValues(c.data.speechOption, vmOptionsList) == 'true' ? 'true' : 'false';
        var paOption_Value = c.getVmOptionsValues(c.data.paOption, vmOptionsList) == 'true' ? 'true' : 'false';
        var rebuildOptions_Value = c.getVmOptionsValues(c.data.rebuildOptions, vmOptionsList) == 'true' ? 'true' : 'false';
        var add0NumOptions_Value = c.getVmOptionsValues(c.data.add0NumOptions, vmOptionsList) == 'true' ? 'true' : 'false';

        var mandatories = true;
        mandatories = mandatories && ($scope.page.g_form.getValue('employee_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('move_date_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('to_home_base_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('to_floor_select_box') != '');
        //mandatories = mandatories && ($scope.page.g_form.getValue('to_workspace_select_box') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('current_cost_center_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('new_cost_center_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('project_code_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('date_options_Vs') != '');
        mandatories = mandatories && ($scope.page.g_form.getValue('ext_Vs') != '');


        if (mandatories) {

            c.obj.push({
                employee: $scope.page.g_form.getValue('employee_Vs'),
                from_home_base: $scope.page.g_form.getValue('from_home_base_Vs'),
                from_floor: $scope.page.g_form.getValue('from_floor_Vs'),
                from_space: $scope.page.g_form.getValue('from_workspace_Vs'),
                cost_center: $scope.page.g_form.getValue('current_cost_center_Vs'),
                project_code: $scope.page.g_form.getValue('project_code_Vs'),
                employee_requested_move_date: $scope.page.g_form.getValue('move_date_Vs'),

                to_home_base: $scope.page.g_form.getValue('to_home_base_Vs'),
                to_floor: $scope.page.g_form.getValue('to_floor_select_box'),
                to_space: $scope.page.g_form.getValue('to_workspace_select_box'),
                new_cost_center: $scope.page.g_form.getValue('new_cost_center_Vs'),


                //LISTS
                monitor_arms_and_quantity: monitor_arms_Value,
                keyboard_trays: keyboard_trays_Value,
                corner_sleeves: corner_sleeves_Value,
                ergotrons: ergotrons_Value,
                height_adjustable_table: height_adjustable_table_Value,
                whiteboards_offices_only: whiteboards_offices_only_Value,
                artwork: artwork_Value,
                raise_kit: raise_kit_Value,
                desktop_power_module: desktop_power_module_Value,
                ergotron_accessory: ergotrons_acc_Value,
                seat_orientation: seat_orientation_Value,
                other: other_Value,
                ergotron_accessory_details: $scope.page.g_form.getValue('ergotron_accesory_details_options_Vs'),
                monitor_arms_quantity_detail: $scope.page.g_form.getValue('quantity_monitor_arms_options_Vs'),
                details: $scope.page.g_form.getValue('details_other_options_Vs'),

                date_options: $scope.page.g_form.getValue('date_options_Vs'),
                reasons_for_change: 'Move/Change',
                ext: $scope.page.g_form.getValue('ext_Vs'),

                // //Voicemail Options
                vm: vmCheck,
                vm_option_voicemail: vmOption_Value,
                vm_option_mobile_enter_number_in_mobile_number_field: mbOption_Value,
                vm_option_speech: speechOption_Value,
                vm_option_personal_assistant: paOption_Value,
                vm_option_rebuild: rebuildOptions_Value,
                vm_option_add_0_option_for_vm: add0NumOptions_Value,
                mobile_number: $scope.page.g_form.getValue('mobile_number_Vs'),
                option_number: $scope.page.g_form.getValue('add_0_option_number_for_vm_Vs'),
                comments: $scope.page.g_form.getValue('comments_Vs')
            });
            c.addUserToCustomTable(c.obj);
            $scope.page.g_form.setValue('move_others_mrvs', JSON.stringify(c.obj));
            c.cleanForm();
            $scope.page.g_form.addInfoMessage('The user was added successfully');
            return;
        } else {
            $scope.page.g_form.addErrorMessage('Please review the form and complete the mandatory fields (*) to continue');
        }
    }

    c.removeAll = function () {
        c.obj = [];
        $scope.page.g_form.setValue('move_others_mrvs', c.obj);
    }

    c.removeUser = function (employee) {
        c.obj = c.obj.filter(function (element) {
            return element.employee.indexOf(employee) == -1
        })
        $scope.page.g_form.setValue('move_others_mrvs', JSON.stringify(c.obj));
    }

    c.addUserToCustomTable = function (obj) {
        c.showRow = true;
        obj.forEach(function (element) {
            c.server.get({
                action_name: 'displayValues',
                user: element.employee,
                toHomeBase: element.to_home_base,
                toFloor: element.to_floor,
                toSpace: element.to_space
            }).then(function (r) {
                element.userName = r.data.employee
                element.homeBase = r.data.toHomeBase
                element.floor = r.data.tofloor
                element.space = r.data.toSpace
            });
        })
    }

    c.getListValues = function (new_, newItems, existing_, existingItems) {
        return newItems.indexOf(new_) != -1 ? 'new' : existingItems.indexOf(existing_) != -1 ? 'existing' : 'none';
    }

    c.getVmOptionsValues = function (item, listOfOptions) {
        return listOfOptions.indexOf(item) != -1 ? 'true' : 'false';
    }

    c.cleanForm = function () {
        $scope.page.g_form.clearValue('employee_Vs');
        $scope.page.g_form.clearValue('from_home_base_Vs');
        $scope.page.g_form.clearValue('from_floor_Vs');
        $scope.page.g_form.clearValue('from_workspace_Vs');
        $scope.page.g_form.clearValue('current_cost_center_Vs');
        $scope.page.g_form.clearValue('new_cost_center_Vs');
        $scope.page.g_form.clearValue('project_code_Vs');
        $scope.page.g_form.clearValue('move_date_Vs');
        $scope.page.g_form.clearValue('to_home_base_Vs');
        $scope.page.g_form.clearValue('to_floor_select_box');
        $scope.page.g_form.clearValue('to_workspace_select_box');
        $scope.page.g_form.clearValue('items_that_can_be_requested_new_as_part_of_a_move_Vs');
        $scope.page.g_form.clearValue('existing_items_to_move_with_employees_Vs');
        $scope.page.g_form.clearValue('voicemail_Vs');
        $scope.page.g_form.clearValue('ergotron_accesory_details_options_Vs');
        $scope.page.g_form.clearValue('details_other_options_Vs');
        $scope.page.g_form.clearValue('quantity_monitor_arms_options_Vs');
        $scope.page.g_form.clearValue('reasons_for_change_Vs');
        $scope.page.g_form.clearValue('date_options_Vs');
        $scope.page.g_form.clearValue('ext_Vs');
        $scope.page.g_form.clearValue('mobile_number_Vs');
        $scope.page.g_form.clearValue('add_0_option_number_for_vm_Vs');
        $scope.page.g_form.clearValue('comments_Vs');
    }

}
