(function () {
    if (input) {
        data.employee = input.user;
        data.toHomeBase = input.toHomeBase;
        data.toFloor = input.toFloor;
        data.toSpace = input.toSpace;

        if (input.action_name == 'displayValues') {
            //get UserName
            var user_ = new GlideRecord('sys_user');
            user_.addQuery('sys_id', data.employee);
            user_.query();
            if(user_.next()){
                data.employee = user_.name.toString();
            }

            var homeBase = new GlideRecord('x_nuvo_eam_building');
            homeBase.addQuery('sys_id', data.toHomeBase);
            homeBase.query();
            if(homeBase.next()){
                data.toHomeBase = homeBase.name.toString();
            }

            var floor = new GlideRecord('x_nuvo_eam_floor');
            floor.addQuery('sys_id', data.toFloor);
            floor.query();
            if(floor.next()){
                data.tofloor = floor.name.toString();
            }

            var location = new GlideRecord('x_nuvo_eam_elocation');
            location.addQuery('sys_id', data.toSpace);
            location.query();
            if(location.next()){
                data.toSpace = location.location_code.toString();
            }
        }
      }



  //Properties
  data.keyboard_trays_new_ = gs.getProperty('x_nuvo_eam.keyboard_trays_new');
  data.keyboard_trays_existing_ = gs.getProperty('x_nuvo_eam.keyboard_trays_existing_');

  data.artwork_new_ = gs.getProperty('x_nuvo_eam.artwork_new_');
  data.artwork_existing_ = gs.getProperty('x_nuvo_eam.artwork_existing_');

  data.corner_sleeves_new_ = gs.getProperty('x_nuvo_eam.corner_sleeves_new_');
  data.corner_sleeves_existing_ = gs.getProperty('x_nuvo_eam.corner_sleeves_existing_');

  data.monitor_arms_new_ = gs.getProperty('x_nuvo_eam.monitor_arms_new_');
  data.monitor_arms_existing_ = gs.getProperty('x_nuvo_eam.monitor_arms_existing_');

  data.ergotrons_new_ = gs.getProperty('x_nuvo_eam.ergotrons_new_');
  data.ergotrons_existing_ = gs.getProperty('x_nuvo_eam.ergotrons_existing_');

  data.height_adjustable_table_new_ = gs.getProperty('x_nuvo_eam.height_adjustable_table_new_');
  data.height_adjustable_table_existing_ = gs.getProperty('x_nuvo_eam.height_adjustable_table_existing_');

  data.whiteboards_offices_only_new_ = gs.getProperty('x_nuvo_eam.whiteboards_offices_only_new_');
  data.whiteboards_offices_only_existing_ = gs.getProperty('x_nuvo_eam.whiteboards_offices_only_existing_');

  data.raise_kit_existing_ = gs.getProperty('x_nuvo_eam.raise_kit_existing_');
  data.ergotrons_acc_new_ = gs.getProperty('x_nuvo_eam.ergotrons_acc_new_');
  data.desktop_power_module_new_ = gs.getProperty('x_nuvo_eam.desktop_power_module_new_');
  data.seat_orientation_existing_ = gs.getProperty('x_nuvo_eam.seat_orientation_existing_');
  data.other_existing_ = gs.getProperty('x_nuvo_eam.other_existing_');

  /* Voicemail Options */
  data.vmOption = gs.getProperty('x_nuvo_eam.Voicemail_list_options');
  data.mbOption = gs.getProperty('x_nuvo_eam.Mobile_list_options');
  data.speechOption = gs.getProperty('x_nuvo_eam.Speech_list_options');
  data.paOption = gs.getProperty('x_nuvo_eam.Personal_Assistant_list_options');
  data.rebuildOptions = gs.getProperty('x_nuvo_eam.Rebuild_list_options');
  data.add0NumOptions = gs.getProperty('x_nuvo_eam.Add_0_Option_for_VM_list_options');
})();
