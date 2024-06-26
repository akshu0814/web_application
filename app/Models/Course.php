<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{

        protected $primaryKey = 'Id';

    protected $fillable = [
        'Number', 'Name', 'Description', 'CourseObjectives', 'CourseContent', 'AdditionalInformation'
    ];
}