<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Diary;
use Illuminate\Support\Facades\DB;

class DiarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('diaries')->truncate();
        Diary::factory(10)->create();
    }
}
